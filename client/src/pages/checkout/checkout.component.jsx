import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { Link } from 'react-router-dom'

import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import StripeButton from '../../components/stripe-button/stripe-button.component'

import {
	selectCartItems,
	selectCartTotal,
} from '../../redux/cart/cart.selectors'

import './checkout.styles.scss'

const CheckoutPage = ({ cartItems, total }) => {
	return (
		<div className="container">
			<div className="checkout-page">
				<h2 className="title">CHECKOUT</h2>
				{cartItems.map((cartItem) => (
					<CheckoutItem key={cartItem.id} cartItem={cartItem} />
				))}
				{cartItems.length ? (
					<>
						<div className="total">
							<span>Total: {total} ₺</span>
						</div>
						<div className="btn-content">
							<StripeButton price={total} />
						</div>
						<div className="example-card">
							<span>Card Number: 4242 4242 4242 4242</span>
							<span>CVC: Any 3 digits</span>
							<span>Date: Any future date</span>
						</div>
					</>
				) : (
					<>
						<span className="empty-text">Your cart is empty</span>
						<Link to="/shop" className="option">
							Go to Shop
						</Link>
					</>
				)}
			</div>
		</div>
	)
}

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	total: selectCartTotal,
})

export default connect(mapStateToProps)(CheckoutPage)
