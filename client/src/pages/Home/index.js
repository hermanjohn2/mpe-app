import React from 'react';

import Navigation from '../../components/Navigation';

import './style.css';

const Home = () => {
	return (
		<div>
			<Navigation />

			<h1 className="text-center">Your personal edge sharpener.</h1>
			<h2 className="text-center">
				<span className="modal-trigger" value="1">
					Small Business
				</span>{' '}
				|{' '}
				<span className="modal-trigger" value="1">
					Professional Service
				</span>{' '}
				|{' '}
				<span className="modal-trigger" value="1">
					Expert Results
				</span>
			</h2>
		</div>
	);
};

export default Home;
