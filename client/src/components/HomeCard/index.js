import React from 'react';

import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const HomeCard = props => {
	const data = props.cardData;
	return (
		<Col className="mt-5 mx-1">
			<Card className="shadow-lg">
				<Card.Body className="text-center">
					<Card.Title>{data.title}</Card.Title>
					<Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
					<div
						style={{
							height: '300px',
							width: '300px',
							border: '1px dotted black'
						}}>
						[insert image here]
					</div>
					<Card.Text className="mt-2">{data.body}</Card.Text>
				</Card.Body>
			</Card>
		</Col>
	);
};

export default HomeCard;
