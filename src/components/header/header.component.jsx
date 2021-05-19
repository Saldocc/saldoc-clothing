import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { selectCurrentUser } from '../../redux/user/user.selectors'
import { signOutStart } from '../../redux/user/user.actions'

import CartIcon from '../cart-icon/cart-icon.component'
import SearchIcon from '../search-icon/search-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'

import { auth } from '../../firebase/firebase.utils'

import { ReactComponent as Logo } from '../../assets/logo.svg'

import './header.styles.scss'

const Header = ({ currentUser, hidden, signOutStart }) => {
	useEffect(() => {
		const header = document.getElementById('myHeader')
		const sticky = header.offsetTop
		const scrollCallBack = window.addEventListener('scroll', () => {
			if (window.pageYOffset > sticky + 200) {
				header.classList.add('sticky')
			} else {
				header.classList.remove('sticky')
			}
		})
		return () => {
			window.removeEventListener('scroll', scrollCallBack)
		}
	}, [])

	return (
		<div id="myHeader" className="header">
			<Link to="/" className="logo-container">
				<Logo className="logo" />
			</Link>
			<div className="options">
				<Link to="/shop" className="option">
					SHOP
				</Link>
				<Link to="/about" className="option">
					ABOUT US
				</Link>
				<Link to="/contact" className="option">
					CONTACT
				</Link>
				{currentUser ? (
					<div className="option" onClick={signOutStart}>
						SIGN OUT
					</div>
				) : (
					<Link to="/signin" className="option">
						SIGN IN
					</Link>
				)}
				<SearchIcon />
				<CartIcon />
			</div>
			{hidden ? null : <CartDropdown />}
		</div>
	)
}

const mapDispatchToProps = (dispatch) => ({
	signOutStart: () => dispatch(signOutStart()),
})

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectCartHidden,
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
