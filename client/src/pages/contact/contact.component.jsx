import React from 'react'
import ParagraphCard from '../../components/paragraph-card/paragraph-card.component'

import './contact.styles.scss'

const Contact = () => {
	return (
		<div className="container">
			<div className="contact-page">
				<h2 className="title">CONTACT</h2>
				<ParagraphCard>
					<h4>Give Us a Call</h4>
					<p>
						555-555-5555 <br />
						Konyaaltı, Antalya, 07800 <br />
						name@saldoc.com
					</p>
					<h4>Operation Hours</h4>
					<p>
						Monday - Friday: 6:30am - 6:30pm
						<br />
						Saturday and Sunday: 8:00am - 4:00pm
					</p>
				</ParagraphCard>
			</div>
		</div>
	)
}

export default Contact
