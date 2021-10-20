import React, { Component } from 'react';

import Fade from 'react-reveal/Fade';

import { connect } from 'react-redux';

import Header from 'components/Navbar';
import PageDetailTitle from 'components/PageDetailTitle';

import FeaturedImages from 'components/FeaturedImages';
import PageDetailDescription from 'components/PageDetailDescription';
import BookingForm from 'components/BookingForm';
import Activities from 'components/Activities';
import Review from 'components/Review';
import Footer from 'components/Footer';

import { checkoutBooking } from 'store/actions/checkout';
import { fetchPage } from 'store/actions/page';

class DetailsPage extends Component {
	componentDidMount() {
		document.title = 'Details Page';
		window.scrollTo(0, 0);

		if (!this.props.page[this.props.match.params.id])
			this.props.fetchPage(
				`${process.env.REACT_APP_HOST}/api/v1/member/detail-page/${this.props.match.params.id}`,
				this.props.match.params.id
			);
	}

	render() {
		const { page, match } = this.props;

		if (!page[match.params.id]) return null;

		const breadcrumb = [
			{ pageTitle: 'Home', pageHref: '' },
			{ pageTitle: 'House Details', pageHref: '' },
		];

		return (
			<>
				<Header {...this.props} />
				<PageDetailTitle
					breadcrumb={breadcrumb}
					data={page[match.params.id]}
				/>
				<FeaturedImages
					data={page[match.params.id].imageId}
				></FeaturedImages>
				<section className="container">
					<div className="row">
						<div className="col-7 pr-5">
							<Fade bottom>
								<PageDetailDescription
									data={page[match.params.id]}
								/>
							</Fade>
						</div>
						<div className="col-5">
							<Fade bottom>
								<BookingForm
									itemDetails={page[match.params.id]}
									startBooking={this.props.checkoutBooking}
								/>
							</Fade>
						</div>
					</div>
				</section>

				<Activities data={page[match.params.id].activityId} />
				<Review data={page[match.params.id].testimonial} />
				<Footer />
			</>
		);
	}
}

const mapStateToProps = (state) => ({
	page: state.page,
});

export default connect(mapStateToProps, { checkoutBooking, fetchPage })(
	DetailsPage
);
