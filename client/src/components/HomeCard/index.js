import React from 'react';

import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import './style.css';

const HomeCard = props => {
	const data = props.cardData;

	return (
		<Col className="mt-5 mx-1">
			<Card className="shadow-lg home-card">
				<Card.Body className="text-center">
					<Card.Title className="home-card-text">{data.title}</Card.Title>

					{data.id !== 3 ? (
						<Card.Img className="home-card-img" src={data.image} />
					) : (
						<iframe
							title="Hair Splitting Video"
							className="home-card-img embed-responsive-item"
							src={data.image}
						/>
					)}

					<Card.Text className="home-card-text mt-2">{data.body}</Card.Text>
				</Card.Body>
			</Card>
		</Col>
	);
};

export default HomeCard;
