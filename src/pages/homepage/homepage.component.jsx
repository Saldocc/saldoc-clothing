import React from 'react'

import Directory from '../../components/directory/directory.component'
import BackgroundHomepage from '../../assets/background-homepage.jpg'

import './homepage.styles.scss'

const HomePage = () => {
	return (
		<div className="homepage">
			<div className="background-image">
				<img src={BackgroundHomepage} alt="background-image" />
				<div className="homepage-title">
					<div className="container">
						<h1>OPEN UP FROM</h1>
						<h1>THE STREET TO THE WORLD</h1>
					</div>
				</div>
			</div>
			<div className="container">
				<Directory />
			</div>
		</div>
	)
}

export default HomePage
