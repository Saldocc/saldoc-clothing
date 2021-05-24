import React from 'react'

import './cart-item.styles.scss'

const CartItem = ({
	item: { imageUrl, price, name, quantity, saleStatus, salePrice },
}) => (
	<div className="cart-item">
		<img src={imageUrl} alt="item" />
		<div className="item-details">
			<span className="name">{name}</span>
			<span className="price">
				{quantity} x {saleStatus ? salePrice : price} ₺
			</span>
		</div>
	</div>
)

export default React.memo(CartItem)
