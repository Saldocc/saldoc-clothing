import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'

import { selectCartItems } from '../../redux/cart/cart.selectors'
import { toggleCartHidden } from '../../redux/cart/cart.actions'

import CustomBtn from '../custom-btn/custom-btn.component'
import CartItem from '../cart-item/cart-item.component'

import './cart-dropdown.styles.scss'

const CartDropdown = ({ cartItems, history, dispatch }) => (
	<div className={cartItems.length ? 'cart-dropdown' : 'cart-dropdown small'}>
		<div className="cart-items">
			{cartItems.length ? (
				cartItems.map((cartItem) => (
					<CartItem key={cartItem.id} item={cartItem} />
				))
			) : (
				<span className="empty-message">Your cart is empty</span>
			)}
		</div>
		{cartItems.length ? (
			<CustomBtn
				onClick={() => {
					dispatch(toggleCartHidden())
					history.push('/checkout')
				}}>
				Go to Checkout
			</CustomBtn>
		) : null}
	</div>
)

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
})

export default withRouter(connect(mapStateToProps)(CartDropdown))
