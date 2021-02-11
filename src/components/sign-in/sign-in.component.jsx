import React from 'react'

import FormInput from '../form-input/form-input.component'
import CustomBtn from '../custom-btn/custom-btn.component'

import { signInWithGoogle } from '../../firebase/firebase.utils'

import './sign-in.styles.scss'

class SignIn extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			email: '',
			password: '',
		}
	}

	handleSubmit = (e) => {
		e.preventDefault()

		this.setState({ email: '', password: '' })
	}

	handleChange = (e) => {
		const { value, name } = e.target
		this.setState({ [name]: value })
	}

	render() {
		const { email, password } = this.state;
		return (
			<div className="sign-in">
				<h2>I already have an account</h2>
				<span className="subtitle">
					If you already have an account, enter your email and password
					information.
				</span>
				<form onSubmit={this.handleSubmit}>
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
					<div className="sign-in-buttons">
						<CustomBtn type="submit">Sign In</CustomBtn>
						<CustomBtn btnType="googleAuth" onClick={signInWithGoogle}>
							with Google
						</CustomBtn>
					</div>
				</form>
			</div>
		)
	}
}

export default SignIn
