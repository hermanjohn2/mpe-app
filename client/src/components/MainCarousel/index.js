import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import carouselImages from '../../utils/carousel-images';

const MainCarousel = () => {
	return (
		<Carousel>
			{carouselImages.map(image => (
				<Carousel.Item key={image.id} className="px-0">
					<img className="d-block w-100" src={image.src} alt="Sharpened tools" />
				</Carousel.Item>
			))}
		</Carousel>
	);
};

export default MainCarousel;
