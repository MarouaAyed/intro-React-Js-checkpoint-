import React from "react";
import { Badge, Button, Col, Container, Form, Row } from "react-bootstrap";
import { FacebookLoginButton } from "react-social-login-buttons";

function Formulaire() {
	return (
		<div>
			<Container>
				<Row>
					<Col md={{ span: 6, offset: 3 }}>
						<h2 className="text-center">
							<Badge variant="secondary">Login</Badge>
						</h2>
						<Form className="App login-form">
							<Form.Group controlId="formBasicEmail">
								<Form.Label>Email address</Form.Label>
								<Form.Control type="email" placeholder="Enter email" />
								<Form.Text className="text-muted">
									We'll never share your email with anyone else.
								</Form.Text>
							</Form.Group>

							<Form.Group controlId="formBasicPassword">
								<Form.Label>Password</Form.Label>
								<Form.Control type="password" placeholder="Password" />
							</Form.Group>
							<Form.Group controlId="formBasicCheckbox">
								<Form.Check type="checkbox" label="Check me out" />
							</Form.Group>
							<Button variant="primary" type="submit">
								Submit
							</Button>
							<div className="text-center">
								<a href="#">Sign up</a>
							</div>
							<FacebookLoginButton className="mt-2 mb-2 text-center" />
						</Form>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default Formulaire;
