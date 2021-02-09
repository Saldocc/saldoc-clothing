import React from 'react'

import FormInput from '../form-input/form-input.component'
import CustomBtn from '../custom-btn/custom-btn.component'

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
		return (
			<div className="sign-in">
				<h2>I already have an account</h2>
				<form onSubmit={this.handleSubmit}>
					<FormInput
						type="email"
						name="email"
						value={this.state.email}
						handleChange={this.handleChange}
						required
						label="Email"
					/>
					<FormInput
						type="password"
						name="password"
						value={this.state.password}
						handleChange={this.handleChange}
						required
						label="Password"
					/>

					<CustomBtn type="submit">Sign In</CustomBtn>
				</form>
			</div>
		)
	}
}

export default SignIn
