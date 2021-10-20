import React, { Component } from 'react';

import Fade from 'react-reveal/Fade';

import { connect } from 'react-redux';

import Header from 'components/Navbar';
import PageDetailTitle from 'components/PageDetailTitle';

import ItemDetails from 'json/itemDetails.json';
import FeaturedImages from 'components/FeaturedImages';
import PageDetailDescription from 'components/PageDetailDescription';
import BookingForm from 'components/BookingForm';
import Categories from 'components/Categories';
import Review from 'components/Review';
import Footer from 'components/Footer';

import { checkoutBooking } from 'store/actions/checkout';

class DetailsPage extends Component {
	componentDidMount() {
		document.title = 'Details Page';
		window.scrollTo(0, 0);
	}

	render() {
		const breadcrumb = [
			{ pageTitle: 'Home', pageHref: '' },
			{ pageTitle: 'House Details', pageHref: '' },
		];

		return (
			<>
				<Header {...this.props} />
				<PageDetailTitle breadcrumb={breadcrumb} data={ItemDetails} />
				<FeaturedImages data={ItemDetails.imageUrls}></FeaturedImages>
				<section className="container">
					<div className="row">
						<div className="col-7 pr-5">
							<Fade bottom>
								<PageDetailDescription data={ItemDetails} />
							</Fade>
						</div>
						<div className="col-5">
							<Fade bottom>
								<BookingForm
									itemDetails={ItemDetails}
									startBooking={this.props.checkoutBooking}
								/>
							</Fade>
						</div>
					</div>
				</section>

				<Categories data={ItemDetails.categories} />
				<Review data={ItemDetails.testimonial} />
				<Footer />
			</>
		);
	}
}

export default connect(null, { checkoutBooking })(DetailsPage);
