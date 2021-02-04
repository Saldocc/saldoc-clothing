import React from 'react'
import './menu-item.styles.scss'

const MenuItem = ({ title, imageUrl, size }) => {
	return (
		<div className="menu-item">
			<div
				className="background-image"
				style={{
					backgroundImage: `url(${imageUrl})`,
				}}
			/>
			<div className="content">
				<h1 className="title">{title}</h1>
			</div>
		</div>
	)
}

export default MenuItem
