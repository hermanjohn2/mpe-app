import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Navigation from '../../components/Navigation';
import Jumbo from '../../components/Jumbo';
import HomeCard from '../../components/HomeCard';

import cardData from '../../utils/card-data';

const Home = () => {
	return (
		<div>
			<Navigation />

			<Jumbo />

			{/* <MainCarousel /> */}

			<Container>
				<Row>
					{cardData.map(data => (
						<HomeCard key={data.id} cardData={data} />
					))}
				</Row>
			</Container>
		</div>
	);
};

export default Home;
