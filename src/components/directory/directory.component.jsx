import React from 'react'
import './directory.styles.scss'

import MenuItem from '../menu-item/menu-item.component'

class Directory extends React.Component {
	constructor() {
		super()

		this.state = {
			sections: [
				{
					title: 'Women\'s',
					imageUrl: 'https://i.ibb.co/RjL9Y8B/woman.png',
					id: 1,
					linkUrl: 'shop/womens',
				},
				{
					title: 'Men\'s',
					imageUrl: 'https://i.ibb.co/kBH8Qhq/man.png',
					id: 2,
					linkUrl: 'shop/mens',
				},
			],
		}
	}

	render() {
		return (
			<div className="directory-menu">
				{this.state.sections.map(({ title, id, imageUrl, size }) => (
					<MenuItem key={id} title={title} imageUrl={imageUrl} />
				))}
			</div>
		)
	}
}

export default Directory
