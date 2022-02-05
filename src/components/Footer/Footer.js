import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";

 const Footer = () => {
return (
	<Box>
	<Container>
		<Row>
		<Column>
		<section className="hero-section">
        <p>Welcome to </p>
        <h1>Amir Service Page ncjlk</h1>
      </section>
			<Heading>About Us</Heading>
			<FooterLink href="#">Aim</FooterLink>
			<FooterLink href="#">Vision</FooterLink>
			<FooterLink href="#">Testimonials</FooterLink>
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;
