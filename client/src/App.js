import React, { useEffect, lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux"
import { createStructuredSelector } from 'reselect'

import Header from './components/header/header.component'

import ShopPage from './pages/shop/shop.component'
import AboutPage from './pages/about/about.component'
import ContactPage from './pages/contact/contact.component'
import CheckoutPage from './pages/checkout/checkout.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'

import Spinner from './components/spinner/spinner.component'
import ErrorBoundary from './components/error-boundary/error-boundary.component'

import { selectCurrentUser } from './redux/user/user.selectors'
import { checkUserSession } from './redux/user/user.actions'

import './App.css';

const HomePage = lazy(() => import('./pages/homepage/homepage.component'))

const App = ({ checkUserSession, currentUser }) => {

  useEffect(() => {
    checkUserSession()
  }, [checkUserSession])

  return (
    <>
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path="/" component={HomePage}></Route>
            <Route path="/shop" component={ShopPage}></Route>
            <Route path="/about" component={AboutPage}></Route>
            <Route path="/contact" component={ContactPage}></Route>
            <Route exact path="/checkout" component={CheckoutPage}></Route>
            <Route exact path={["/signin", "/signup"]} render={() => currentUser ? <Redirect to="/" /> : (<SignInAndSignUpPage />)}></Route>
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </ >

  );

}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
