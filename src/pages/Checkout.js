import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

import Navbar from 'components/Navbar';
import Button from 'elements/Button';
import Stepper, {
	Numbering,
	Meta,
	MainContent,
	Controller,
} from 'elements/Stepper';

import BookingInformation from 'components/Checkout/BookingInformation';
import Payment from 'components/Checkout/Payment';
import Completed from 'components/Checkout/Completed';

import ItemDetails from 'json/itemDetails.json';

export default class Checkout extends Component {
	render() {
		return (
			<>
				<Navbar isCentered />
			</>
		);
	}
}
