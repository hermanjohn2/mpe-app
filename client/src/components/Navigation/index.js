import React, { useState } from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';

import './style.css';

const Navigation = () => {
	const [hover, setHover] = useState(false);

	const toggleHoverOn = () => setHover(true);

	const toggleHoverOff = () => setHover(false);

	let navbarStyle;
	let linkStyle;

	// Setting the class for the navbar and div surrounding the links based on hover state
	hover ? (navbarStyle = 'nav-bg') && (linkStyle = 'show') : (navbarStyle = 'trans-bg') && (linkStyle = 'hide');

	return (
		<div>
			<Navbar
				collapseOnSelect
				expand="xl"
				className={navbarStyle}
				id="mpe-nav"
				onMouseOver={toggleHoverOn}
				onMouseOut={toggleHoverOff}>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Brand>
					<Nav.Link href="/home">
						<Image src="/images/trans-logo-small.png" id="nav-logo" />
					</Nav.Link>
				</Navbar.Brand>
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav id="nav-elements" className="mr-auto">
						<div className={linkStyle}>
							<Nav.Link className="mpe-nav-link" href="/orders">
								Contact
							</Nav.Link>

							<Nav.Link className="mpe-nav-link" href="/about-us">
								About Us
							</Nav.Link>
							<Nav.Link
								className="mpe-nav-link"
								href="https://www.instagram.com/mariettaprecisionedge/?hl=en"
								target="_blank">
								<i className="fa fa-instagram" aria-hidden="true"></i>{' '}
								Gallery
							</Nav.Link>
						</div>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
};

export default Navigation;
