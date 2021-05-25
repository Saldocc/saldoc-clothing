import React, { useRef, useEffect } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'

import { toggleCartHidden } from '../../redux/cart/cart.actions'
import { selectCartItems } from '../../redux/cart/cart.selectors'

import CustomBtn from '../custom-btn/custom-btn.component'
import CartItem from '../cart-item/cart-item.component'

import './cart-dropdown.styles.scss'

function useOutsideAlerter(ref) {
	useEffect(() => {
		const cartButton = document.getElementById('cart-button')
		function handleClickOutside(event) {
			if (
				ref.wrapperRef.current &&
				!ref.wrapperRef.current.contains(event.target) &&
				!cartButton.contains(event.target)
			) {
				ref.closeFunc()
			}
		}
		document.addEventListener('mousedown', handleClickOutside)
		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [ref])
}

const CartDropdown = ({ cartItems, history, toggleCartHidden }) => {
	const wrapperRef = useRef(null)
	const closeFunc = toggleCartHidden
	useOutsideAlerter({ wrapperRef, closeFunc })

	return (
		<div
			ref={wrapperRef}
			className={cartItems.length ? 'cart-dropdown' : 'cart-dropdown small'}>
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
						closeFunc()
						history.push('/checkout')
					}}>
					Go to Checkout
				</CustomBtn>
			) : null}
		</div>
	)
}

const mapDispatchToProps = (dispatch) => ({
	toggleCartHidden: () => dispatch(toggleCartHidden()),
})

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
})

export default withRouter(
	connect(mapStateToProps, mapDispatchToProps)(CartDropdown)
)
