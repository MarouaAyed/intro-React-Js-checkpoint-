import React from "react";
import { Nav, Navbar } from "react-bootstrap";

function Barnav() {
	return (
		<div>
			<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav>
						<Nav.Link href="#">Login</Nav.Link>
						<Nav.Link href="#">Register</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
}

export default Barnav;
