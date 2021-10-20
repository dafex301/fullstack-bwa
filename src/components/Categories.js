import React from 'react';
import { ReactComponent as WhiteStar } from '../images/white-star.svg';
import Button from 'elements/Button';
import Fade from 'react-reveal/Fade';

export default function Categories({ data }) {
	return data.map((category, index1) => {
		if (category.itemId.length === 0) return null;
		return (
			<section className="container" key={`category-${index1}`}>
				<Fade bottom>
					<h4 className="mb-3 font-weight-medium">{category.name}</h4>
					<div className="container-grid">
						{category.itemId.map((item, index2) => {
							return (
								<div
									className="item column-3 row-1"
									key={`item-${index2}`}
								>
									<Fade bottom delay={300 * index2}>
										<div className="card">
											{item.isPopular && (
												<div className="tag yellow">
													<WhiteStar />
												</div>
											)}
											<figure
												className="img-wrapper"
												style={{ height: 180 }}
											>
												<img
													src={
														item.imageId[0]
															? `${process.env.REACT_APP_HOST}/${item.imageId[0].imageUrl}`
															: ''
													}
													alt={item.name}
													className="img-cover"
												/>
											</figure>
											<div className="meta-wrapper">
												<Button
													className="stretched-link d-block text-gray-800"
													type="link"
													href={`/properties/${item._id}`}
												>
													<h5 className="prop-name-none">
														{item.name}
													</h5>
												</Button>
												<span className="text-gray-500">
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
	});
}
