import React, { Component } from 'react';
import { connect } from 'react-redux';

import Navbar from 'components/Navbar';
import Hero from 'components/Hero';
import MostPicked from 'components/MostPicked';
import Categories from 'components/Categories';
import Review from 'components/Review';
import Footer from 'components/Footer';

import { fetchPage } from 'store/actions/page';

class LandingPage extends Component {
	componentDidMount() {
		document.title = 'Staycation | Home';
		window.scrollTo(0, 0);

		if (!this.props.page.landingPage)
			this.props.fetchPage(
				`${process.env.REACT_APP_HOST}/api/v1/member/landing-page`,
				'landingPage'
			);
	}
	constructor(props) {
		super(props);
		this.refMostPicked = React.createRef();
	}
	render() {
		const { page } = this.props;
		console.log(page);

		if (!page.hasOwnProperty('landingPage')) return null;
		return (
			<>
				<Navbar {...this.props}></Navbar>
				<Hero
					refMostPicked={this.refMostPicked}
					data={page.landingPage.hero}
				/>
				<MostPicked
					refMostPicked={this.refMostPicked}
					data={page.landingPage.mostPicked}
				/>
				<Categories data={page.landingPage.category} />
				<Review data={page.landingPage.testimonial}></Review>
				<Footer></Footer>
			</>
		);
	}
}

const mapStateToProps = (state) => ({
	page: state.page,
});

export default connect(mapStateToProps, { fetchPage })(LandingPage);
