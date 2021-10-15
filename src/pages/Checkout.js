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
	state = {
		data: {
			firstName: '',
			lastName: '',
			email: '',
			phone: '',
			proofPayment: '',
			bankName: '',
			bankHolder: '',
		},
	};

	onChange = (event) => {
		this.setState({
			data: {
				...this.state.data,
				[event.target.name]: event.target.value,
			},
		});
	};

	componenDidMount() {
		window.scroll(0, 0);
	}

	render() {
		const { data } = this.state;

		const checkout = {
			duration: 3,
		};

		const steps = {
			bookingInformation: {
				title: 'Booking Information',
				description: 'Please fill up the blank fields below',
				content: (
					<BookingInformation
						data={data}
						checkout={checkout}
						ItemDetails={ItemDetails}
						onChange={this.onChange}
					/>
				),
			},
			payment: {
				title: 'Payment',
				description: 'Kindly follow the instruction below',
				content: (
					<Payment
						data={data}
						ItemDetails={ItemDetails}
						checkout={checkout}
						onChange={this.onChange}
					/>
				),
			},
			completed: {
				title: 'Yay! Completed',
				description: null,
				content: <Completed />,
			},
		};
		return (
			<>
				<Navbar isCentered />

				<Stepper steps={steps}>
					{(prevStep, nextStep, CurrentStep, steps) => {}}
				</Stepper>
			</>
		);
	}
}
