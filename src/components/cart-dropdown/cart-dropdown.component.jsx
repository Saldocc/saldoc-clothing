import React from 'react'
import { connect } from 'react-redux'

import CartItem from '../cart-item/cart-item.component'
import CustomBtn from '../custom-btn/custom-btn.component'

import './cart-dropdown.styles.scss'

const CartDropdown = ({ cartItems }) => (
	<div className="cart-dropdown">
		<div className="cart-items">
			{cartItems.map((cartItem) => (
				<CartItem key={cartItem.id} item={cartItem} />
			))}
		</div>
		<CustomBtn>Go to Checkout</CustomBtn>
	</div>
)

const mapStateToProps = ({ cart: { cartItems } }) => ({
	cartItems,
})

export default connect(mapStateToProps)(CartDropdown)
