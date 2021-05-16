import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux"
import { createStructuredSelector } from 'reselect'

import Header from './components/header/header.component'

import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import AboutPage from './pages/about/about.component'
import ContactPage from './pages/contact/contact.component'
import CheckoutPage from './pages/checkout/checkout.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'

import { setCurrentUser } from './redux/user/user.actions'
import { selectCurrentUser } from './redux/user/user.selectors'

//import { selectCollectionsForPreview } from './redux/shop/shop.selector'

import { auth, createUserProfileDocuments, addCollectionAndDocuments } from './firebase/firebase.utils'

import './App.css';
class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser, collectionsArray } = this.props

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocuments(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        });
      } else {
        setCurrentUser(userAuth)
        //addCollectionAndDocuments('collections', collectionsArray.map(({ title, items }) => ({ title, items })))
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/shop" component={ShopPage}></Route>
          <Route path="/about" component={AboutPage}></Route>
          <Route path="/contact" component={ContactPage}></Route>
          <Route exact path="/checkout" component={CheckoutPage}></Route>
          <Route exact path={["/signin", "/signup"]} render={() => this.props.currentUser ? <Redirect to="/" /> : (<SignInAndSignUpPage />)}></Route>
        </Switch>
      </ >

    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  //collectionsArray: selectCollectionsForPreview
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
