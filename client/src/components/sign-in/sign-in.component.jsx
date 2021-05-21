import React, { useState } from 'react'
import { connect } from 'react-redux'

import FormInput from '../form-input/form-input.component'
import CustomBtn from '../custom-btn/custom-btn.component'

import {
	googleSignInStart,
	emailSignInStart,
} from '../../redux/user/user.actions'

import './sign-in.styles.scss'

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
	const [userCredentials, setCredentials] = useState({
		email: '',
		password: '',
	})

	const { email, password } = userCredentials

	const handleSubmit = async (e) => {
		e.preventDefault()
		emailSignInStart(email, password)
	}

	const handleChange = (e) => {
		const { value, name } = e.target
		setCredentials({ ...userCredentials, [name]: value })
	}

	return (
		<div className="sign-in">
			<h2>I already have an account</h2>
			<span className="subtitle">
				If you already have an account, enter your email and password
				information.
			</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					type="email"
					name="email"
					value={email}
					handleChange={handleChange}
					required
					label="Email"
				/>
				<FormInput
					type="password"
					name="password"
					value={password}
					handleChange={handleChange}
					required
					label="Password"
				/>
				<div className="sign-in-buttons">
					<CustomBtn type="submit">Sign In</CustomBtn>
					<CustomBtn
						type="button"
						btnType="googleAuth"
						onClick={googleSignInStart}>
						with Google
					</CustomBtn>
				</div>
			</form>
		</div>
	)
}

const mapDispatchToProps = (dispatch) => ({
	googleSignInStart: () => dispatch(googleSignInStart()),
	emailSignInStart: (email, password) =>
		dispatch(emailSignInStart({ email, password })),
})

export default connect(null, mapDispatchToProps)(SignIn)
