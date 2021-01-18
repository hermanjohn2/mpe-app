import React from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Image from 'react-bootstrap/Image';

import './style.css';

const Jumbo = () => {
	return (
		<Jumbotron className="home-jumbo">
			<Image className="jumbo-img" src="/images/trans-logo.png" />
		</Jumbotron>
	);
};

export default Jumbo;
