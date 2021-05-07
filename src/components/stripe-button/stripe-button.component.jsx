import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

import logoSquare from '../../assets/logo-square.png'

const StripeButton = ({ price }) => {
	const priceForStripe = price * 100
	const publisableKey =
		'pk_test_51IoPGTKsb8amOoZjyO0YJUvR5eUYDo8aIJPG3zpqrBEGfSbsCEND42kmTnt2HdyenJUuXxmjW75mNiQvFQ86EzoA00FAXeNWcq'
	const onToken = (token) => {
		alert('Payment successful')
	}
	return (
		<StripeCheckout
			label="Pay Now"
			name="Saldoc Clothing"
			billingAddress
			shippingAddress
			allowRememberMe
			image={logoSquare}
			description={`Your total is ${price}₺`}
			amount={priceForStripe}
			token={onToken}
			stripeKey={publisableKey}>
			<button className="btn btn-primary">Pay Now</button>
		</StripeCheckout>
	)
}

export default StripeButton
