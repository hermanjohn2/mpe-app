import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import './style.css';

const HomeCard = props => {
	const data = props.cardData;

	// Using state of show to set className for card
	let display;
	!props.show ? (display = 'hide') : (display = 'home-card');

	return (
		<Container>
			<Row>
				<Col className="mt-2 mx-1">
					<Card className={`shadow-lg ${display}`}>
						<Card.Body className="text-center">
							<button
								className="float-right"
								onClick={() => props.setShow(false)}>
								X
							</button>
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

							<Card.Text className="home-card-text mt-2">
								{data.body}
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};

export default HomeCard;
