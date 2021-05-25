import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import SignIn from '../../components/sign-in/sign-in.component'
import SignUp from '../../components/sign-up/sign-up.component'
import Alert from '../../components/alert/alert.component'

import { selectCurrentError } from '../../redux/user/user.selectors'

import './sign-in-and-sign-up.styles.scss'

const SignInAndSignUpPage = ({ userError }) => {
	return (
		<div className="sign-in-and-sign-up">
			{userError && <Alert alertType="error">{userError.message}</Alert>}
			<div className="sign-in-and-sign-up-content">
				<SignIn />
				<SignUp />
			</div>
		</div>
	)
}

const mapStateToProps = createStructuredSelector({
	userError: selectCurrentError,
})

export default connect(mapStateToProps, null)(SignInAndSignUpPage)
