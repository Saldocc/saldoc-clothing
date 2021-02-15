import React from 'react'

import CustomBtn from '../custom-btn/custom-btn.component'

import './cart-dropdown.styles.scss'

const CartDropdown = () => (
	<div className="cart-dropdown">
		<div className="cart-items" />
		<CustomBtn>Go to Checkout</CustomBtn>
	</div>
)

export default CartDropdown
