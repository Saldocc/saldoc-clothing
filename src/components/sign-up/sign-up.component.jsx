import React from 'react'

import FormInput from '../form-input/form-input.component'
import CustomBtn from '../custom-btn/custom-btn.component'

import { auth, createUserProfileDocuments } from '../../firebase/firebase.utils'

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

		const { displayName, email, password, confirmPassword } = this.state

		if (password !== confirmPassword) {
			alert('Password do not match')
			return
		}

		try {
			const { user } = await auth.createUserWithEmailAndPassword(
				email,
				password
			)
			await createUserProfileDocuments(user, { displayName })

			this.setState({
				displayName: '',
				email: '',
				password: '',
				confirmPassword: '',
			})
		} catch (error) {
			console.log(error)
		}
	}

	handleChange = (e) => {
		const { value, name } = e.target
		this.setState({ [name]: value })
	}

	render() {
		const { displayName, email, password, confirmPassword } = this.state
		return (
			<div className="sign-up">
				<h2>I do not have account</h2>
				<span className="subtitle">Sign up with your email and password</span>
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

export default SignUp
