import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import CartIcon from '../cart-icon/cart-icon.component'
import SearchIcon from '../search-icon/search-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'

import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { selectCurrentUser } from '../../redux/user/user.selectors'

import { auth } from '../../firebase/firebase.utils'

import { ReactComponent as Logo } from '../../assets/logo.svg'

import './header.styles.scss'

const Header = ({ currentUser, hidden }) => {
	useEffect(() => {
		const header = document.getElementById('myHeader')
		const sticky = header.offsetTop
		const scrollCallBack = window.addEventListener('scroll', () => {
			if (window.pageYOffset > sticky + 150) {
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
					<div className="option" onClick={() => auth.signOut()}>
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

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectCartHidden,
})

export default connect(mapStateToProps)(Header)
