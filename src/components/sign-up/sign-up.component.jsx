import React from 'react'
import { connect } from 'react-redux'

import FormInput from '../form-input/form-input.component'
import CustomBtn from '../custom-btn/custom-btn.component'

import { signUpStart } from '../../redux/user/user.actions'

import './sign-up.styles.scss'

class SignUp extends React.Component {
	constructor() {
		super()

		this.state = {
			displayName: '',
			email: '',
			password: '',
			confirmPassword: '',
		}
	}

	handleSubmit = async (e) => {
		e.preventDefault()
		const { signUpStart } = this.props
		const { displayName, email, password, confirmPassword } = this.state

		if (password !== confirmPassword) {
			alert("passwords don't match")
			return
		}

		signUpStart({ displayName, email, password })
	}

	handleChange = (e) => {
		const { value, name } = e.target
		this.setState({ [name]: value })
	}

	render() {
		const { displayName, email, password, confirmPassword } = this.state
		return (
			<div className="sign-up">
				<h2>I don't have account</h2>
				<span className="subtitle">
					If you don't have account yet, sign up with your email and password .
				</span>
				<form className="sign-up-form" onSubmit={this.handleSubmit}>
					<FormInput
						type="text"
						name="displayName"
						value={displayName}
						handleChange={this.handleChange}
						required
						label="Name"
					/>
					<FormInput
						type="email"
						name="email"
						value={email}
						handleChange={this.handleChange}
						required
						label="Email"
					/>
					<FormInput
						type="password"
						name="password"
						value={password}
						handleChange={this.handleChange}
						required
						label="Password"
					/>
					<FormInput
						type="password"
						name="confirmPassword"
						value={confirmPassword}
						handleChange={this.handleChange}
						required
						label="Confirm Password"
					/>
					<CustomBtn type="submit">Sign Up</CustomBtn>
				</form>
			</div>
		)
	}
}

const mapDispatchToProps = (dispatch) => ({
	signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
})

export default connect(null, mapDispatchToProps)(SignUp)
