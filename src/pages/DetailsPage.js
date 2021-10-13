import React, { Component } from 'react';

import Header from 'components/Navbar';
import PageDetailTitle from 'components/PageDetailTitle';

import ItemDetails from 'json/itemDetails.json';

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
			</>
		);
	}
}
