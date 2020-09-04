import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import Navigation from '../../components/Navigation';

const carouselImages = [
	{
		id: 1,
		src: '/images/dark-knife.jpeg'
	},
	{
		id: 2,
		src: '/images/scissor.jpeg'
	},
	{
		id: 3,
		src: '/images/knife-silver.jpeg'
	},
	{
		id: 4,
		src: '/images/scissor2.jpeg'
	},
	{
		id: 5,
		src: '/images/scissor3.jpeg'
	}
];

const Home = () => {
	return (
		<div>
			<Navigation />

			<Carousel>
				{carouselImages.map(image => (
					<Carousel.Item key={image.id} className="px-1">
						<img className="d-block w-100" src={image.src} alt="Sharpened tools" />
					</Carousel.Item>
				))}
			</Carousel>
		</div>
	);
};

export default Home;
