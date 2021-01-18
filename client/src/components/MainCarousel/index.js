import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';

import carouselImages from '../../utils/carousel-images';

import './style.css';

const MainCarousel = () => {
	return (
		<Carousel>
			{carouselImages.map(image => (
				<Carousel.Item key={image.id}>
					<Image className="d-block carousel-img" src={image.src} alt="Sharpened tools" />
				</Carousel.Item>
			))}
		</Carousel>
	);
};

export default MainCarousel;
