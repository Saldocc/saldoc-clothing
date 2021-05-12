import React from 'react'
import { connect } from 'react-redux'

import {
	clearItemFromCart,
	addItem,
	removeItem,
} from '../../redux/cart/cart.actions'
import './checkout-item.styles.scss'

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
	const { name, imageUrl, price, quantity, salePrice, saleStatus } = cartItem
	return (
		<div className="checkout-item">
			<div className="image-container">
				<img src={imageUrl} alt="item" />
			</div>
			<div className="info-conteiner">
				<div className="info-left">
					<span className="name">{name}</span>
					<div className="remove-button" onClick={() => clearItem(cartItem)}>
						Remove
					</div>
				</div>
				<div className="info-right">
					<div className="quantity">
						<div className="arrow" onClick={() => removeItem(cartItem)}>
							&#10094;
						</div>
						<span className="value">{quantity}</span>
						<div className="arrow" onClick={() => addItem(cartItem)}>
							&#10095;
						</div>
					</div>
					<span className="price">{saleStatus ? salePrice : price} ₺</span>
				</div>
			</div>
		</div>
	)
}

const mapDispatchToProps = (dispatch) => ({
	clearItem: (item) => dispatch(clearItemFromCart(item)),
	addItem: (item) => dispatch(addItem(item)),
	removeItem: (item) => dispatch(removeItem(item)),
})

export default connect(null, mapDispatchToProps)(CheckoutItem)
