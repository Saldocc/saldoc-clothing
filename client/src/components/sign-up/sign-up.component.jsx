import React, { useState } from 'react'
import { connect } from 'react-redux'

import FormInput from '../form-input/form-input.component'
import CustomBtn from '../custom-btn/custom-btn.component'

import { signUpStart } from '../../redux/user/user.actions'

import './sign-up.styles.scss'

const SignUp = ({ signUpStart }) => {
	const [userInformation, setInformation] = useState({
		displayName: '',
		email: '',
		password: '',
		confirmPassword: '',
	})

	const { displayName, email, password, confirmPassword } = userInformation

	const handleSubmit = async (e) => {
		e.preventDefault()

		if (password !== confirmPassword) {
			alert("passwords don't match")
			return
		}

		signUpStart({ displayName, email, password })
	}

	const handleChange = (e) => {
		const { value, name } = e.target
		setInformation({ ...userInformation, [name]: value })
	}

	return (
		<div className="sign-up">
			<h2>I don't have account</h2>
			<span className="subtitle">
				If you don't have account yet, sign up with your email and password .
			</span>
			<form className="sign-up-form" onSubmit={handleSubmit}>
				<FormInput
					type="text"
					name="displayName"
					value={displayName}
					handleChange={handleChange}
					required
					label="Name"
				/>
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
				<FormInput
					type="password"
					name="confirmPassword"
					value={confirmPassword}
					handleChange={handleChange}
					required
					label="Confirm Password"
				/>
				<CustomBtn type="submit">Sign Up</CustomBtn>
			</form>
		</div>
	)
}

const mapDispatchToProps = (dispatch) => ({
	signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
})

export default connect(null, mapDispatchToProps)(SignUp)
