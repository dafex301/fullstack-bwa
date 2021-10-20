import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import { connect } from 'react-redux';

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

class Checkout extends Component {
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
		const { checkout } = this.props;

		if (!checkout) {
			return (
				<div className="container">
					<div
						className="row align-items-center justify-content-center text-center"
						style={{ height: '100vh' }}
					>
						<div className="col-3">Pilih kamar terlebih dahulu</div>
						<Button
							className="btn mt-5"
							type="link"
							href="/"
							isLight
						>
							Back
						</Button>
					</div>
				</div>
			);
		}

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
					{(prevStep, nextStep, CurrentStep, steps) => (
						<>
							<Numbering
								data={steps}
								current={CurrentStep}
								style={{ marginBottom: 50, marginTop: 50 }}
							/>

							<Meta data={steps} current={CurrentStep} />

							<MainContent data={steps} current={CurrentStep} />

							{CurrentStep === 'bookingInformation' && (
								<Controller>
									{data.firstName !== '' &&
										data.lastName !== '' &&
										data.email !== '' &&
										data.phone !== '' && (
											<Fade>
												<div className="text-center">
													<Button
														className="btn mb-3"
														type="button"
														isBlock
														isPrimary
														hasShadow
														onClick={nextStep}
													>
														Continue to Book
													</Button>
												</div>
											</Fade>
										)}
									<div className="text-center">
										<Button
											className="btn"
											type="link"
											isBlock
											isLight
											href={`/properties/${ItemDetails._id}`}
										>
											Cancel
										</Button>
									</div>
								</Controller>
							)}

							{CurrentStep === 'payment' && (
								<Controller>
									{data.proofPayment !== '' &&
										data.bankName !== '' &&
										data.bankHolder !== '' && (
											<Fade>
												<div className="text-center">
													<Button
														className="btn mb-3"
														type="button"
														isBlock
														isPrimary
														hasShadow
														onClick={nextStep}
													>
														Continue to Book
													</Button>
												</div>
											</Fade>
										)}
									<div className="text-center">
										<Button
											className="btn"
											type="button"
											isBlock
											isLight
											onClick={prevStep}
										>
											Cancel
										</Button>
									</div>
								</Controller>
							)}

							{CurrentStep === 'completed' && (
								<Controller>
									<div className="text-center">
										<Button
											className="btn"
											type="link"
											isBlock
											isPrimary
											hasShadow
											href=""
										>
											Back to Home
										</Button>
									</div>
								</Controller>
							)}
						</>
					)}
				</Stepper>
			</>
		);
	}
}

const mapStateToProps = (state) => ({
	checkout: state.checkout,
});

export default connect(mapStateToProps)(Checkout);
