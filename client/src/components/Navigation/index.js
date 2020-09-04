import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Navigation = () => {
	return (
		<div>
			<Navbar collapseOnSelect expand="lg" bg="light" variant="light">
				<Navbar.Brand href="/home">MPE</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="mr-auto">
						<Nav.Link href="/orders">Orders</Nav.Link>
						<Nav.Link href="/about-us">About Us</Nav.Link>
					</Nav>
					<Nav>
						<Nav.Link
							href="https://www.instagram.com/mariettaprecisionedge/?hl=en"
							target="_blank">
							<i class="fa fa-instagram" aria-hidden="true"></i>
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
};

export default Navigation;
