import React from 'react'

import ParagraphCard from '../../components/paragraph-card/paragraph-card.component'

import './about.styles.scss'
const AboutPage = () => {
	return (
		<div className="container">
			<div className="about-page">
				<h2 className="title">ABOUT US</h2>
				<ParagraphCard>
					<h4>Welcome to our world</h4>
					<p>
						Our story began in 2001 in a small studio in the middle of nowhere.
						With only one desk and next to no free time, our brand was born. Our
						passion for unique design and collaboration brought our vision, and
						products, to life. <br /> <br />
						Our products bring together the finest materials and stunning design
						to create something very special. We believe in quality, care, and
						creating unique products that everyone can enjoy. Colorful,
						creative, and inspired by what we see everyday, each product
						represents what we love about the world we live in. We hope they’ll
						inspire you too.
					</p>
				</ParagraphCard>
			</div>
		</div>
	)
}

export default AboutPage
