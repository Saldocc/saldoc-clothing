import React from 'react'
import { connect } from 'react-redux'
import { selectCartItems } from '../../redux/cart/cart.selectors'

import CustomBtn from '../custom-btn/custom-btn.component'
import CartItem from '../cart-item/cart-item.component'

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

const mapStateToProps = (state) => ({
	cartItems: selectCartItems(state),
})

export default connect(mapStateToProps)(CartDropdown)
