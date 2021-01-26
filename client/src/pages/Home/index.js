import React, { useState } from 'react';

import Navigation from '../../components/Navigation';
import HomeCard from '../../components/HomeCard';

import cardData from '../../utils/card-data';

import './style.css';

const Home = () => {
	const [cardId, setCardId] = useState(0);
	const [show, setShow] = useState(false);

	const handleModalClick = e => {
		const chosenElValue = e.target.getAttribute('value');

		setCardId(chosenElValue - 1); // Subtracting 1 to align id with array index

		setShow(true);
	};

	return (
		<div>
			<Navigation />

			<h1 className="text-center">Your personal edge sharpener.</h1>
			<br />
			<h2 className="text-center">
				<span className="modal-trigger" value="1" onClick={handleModalClick}>
					Small Business
				</span>{' '}
				|{' '}
				<span className="modal-trigger" value="2" onClick={handleModalClick}>
					Professional Service
				</span>{' '}
				|{' '}
				<span className="modal-trigger" value="3" onClick={handleModalClick}>
					Expert Results
				</span>
			</h2>

			<HomeCard show={show} setShow={setShow} cardData={cardData[cardId]} />
		</div>
	);
};

export default Home;
