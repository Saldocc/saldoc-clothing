import React from 'react'

import './collection-item.styles.scss'

const CollectionItem = ({ id, name, price, imageUrl }) => {
	return (
		<div className="collection-item">
			<img src={imageUrl} alt={`img-${name}`} className="image" />
			<div className="collection-footer">
				<div className="collection-footer-info">
					<span className="name">{name}</span>
					<span className="price">{price}</span>
				</div>
			</div>
		</div>
	)
}

export default CollectionItem
