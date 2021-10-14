import React, { Component } from 'react';

import Header from 'components/Navbar';
import PageDetailTitle from 'components/PageDetailTitle';

import ItemDetails from 'json/itemDetails.json';
import FeaturedImages from 'components/FeaturedImages';
import PageDetailDescription from 'components/PageDetailDescription';

export default class DetailsPage extends Component {
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
				<Header {...this.props}></Header>
				<PageDetailTitle
					breadcrumb={breadcrumb}
					data={ItemDetails}
				></PageDetailTitle>
				<FeaturedImages data={ItemDetails.imageUrls}></FeaturedImages>
				<div className="container">
					<div className="row">
						<div className="col-7 pr-5">
							<PageDetailDescription
								data={ItemDetails}
							></PageDetailDescription>
						</div>
						<div className="col-5">Booking Form</div>
					</div>
				</div>
			</>
		);
	}
}
