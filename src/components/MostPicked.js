import React from 'react';
import Button from 'elements/Button';
import Fade from 'react-reveal/Fade';

export default function MostPicked(props) {
	return (
		<section className="container" ref={props.refMostPicked}>
			<Fade bottom>
				<h4 className="mb-4">Most Picked</h4>
				<div className="container-grid">
					{props.data.map((item, index) => {
						return (
							<div
								className={`item column-4 ${
									index === 0 ? 'row-2' : 'row-1'
								}`}
								key={`mostpicked-${index}`}
							>
								<Fade bottom delay={300 + index * 50}>
									<div className="card card-featured">
										<div className="tag">
											${item.price}
											<span className="fw-light">
												/{item.unit}
											</span>
										</div>
										<figure className="img-wrapper">
											<img
												src={
													item.imageId[0]
														? `${process.env.REACT_APP_HOST}/${item.imageId[0].imageUrl}`
														: ''
												}
												alt={item.imageId.name}
												className="img-cover"
											/>
										</figure>
										<div className="meta-wrapper">
											<Button
												className="stretched-link d-block text-white"
												type="link"
												href={`/properties/${item._id}`}
											>
												<h5 className="property-name">
													{item.title}
												</h5>
											</Button>
											<span>
												{item.city}, {item.country}
											</span>
										</div>
									</div>
								</Fade>
							</div>
						);
					})}
				</div>
			</Fade>
		</section>
	);
}
