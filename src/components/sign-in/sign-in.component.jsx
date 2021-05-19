import React from 'react'
import { connect } from 'react-redux'

import FormInput from '../form-input/form-input.component'
import CustomBtn from '../custom-btn/custom-btn.component'

import {
	googleSignInStart,
	emailSignInStart,
} from '../../redux/user/user.actions'

import './sign-in.styles.scss'

class SignIn extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			email: '',
			password: '',
		}
	}

	handleSubmit = async (e) => {
		e.preventDefault()
		const { emailSignInStart } = this.props
		const { email, password } = this.state

		emailSignInStart(email, password)
	}

	handleChange = (e) => {
		const { value, name } = e.target
		this.setState({ [name]: value })
	}

	render() {
		const { googleSignInStart } = this.props
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
}

const mapDispatchToProps = (dispatch) => ({
	googleSignInStart: () => dispatch(googleSignInStart()),
	emailSignInStart: (email, password) =>
		dispatch(emailSignInStart({ email, password })),
})

export default connect(null, mapDispatchToProps)(SignIn)
