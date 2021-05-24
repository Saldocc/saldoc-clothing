import React from 'react'
import { Link } from 'react-router-dom'

import CustomBtn from '../custom-btn/custom-btn.component'

import './error-boundary.styles.scss'

class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props)
		this.state = { hasError: false }
	}

	static getDerivedStateFromError(error) {
		return { hasError: true }
	}
	componentDidCatch(error, errorInfo) {
		console.error(error, errorInfo)
	}

	render() {
		if (this.state.hasError) {
			return (
				<div className="error-text">
					<h1>Sorry this page is broke</h1>
					<Link to="/">
						<CustomBtn>Go HomePage </CustomBtn>
					</Link>
				</div>
			)
		}

		return this.props.children
	}
}

export default ErrorBoundary
