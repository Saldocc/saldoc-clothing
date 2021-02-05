import React from 'react'
import './directory.styles.scss'

import MenuItem from '../menu-item/menu-item.component'

class Directory extends React.Component {
	constructor() {
		super()

		this.state = {
			sections: [
				{
					title: "Women's",
					imageUrl: 'https://i.ibb.co/RjL9Y8B/woman.png',
					id: 1,
					linkUrl: 'shop/womans',
				},
				{
					title: "Men's",
					imageUrl: 'https://i.ibb.co/kBH8Qhq/man.png',
					id: 2,
					linkUrl: 'shop/mans',
				},
			],
		}
	}

	render() {
		return (
			<div className="directory-menu">
				{this.state.sections.map(({ id, ...otherSectionProps }) => (
					<MenuItem key={id} {...otherSectionProps} />
				))}
			</div>
		)
	}
}

export default Directory
