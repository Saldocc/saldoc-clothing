import { takeLatest, put, all, call, select } from 'redux-saga/effects'

import UserActionTypes from '../user/user.types'
import CartActionTypes from './cart.types';
import { getUserCart } from '../../firebase/firebase.utils'
import { selectCurrentUser } from '../user/user.selectors';
import { selectCartItems } from './cart.selectors';

import { clearCart, getCartFromFirebase } from './cart.actions'

export function* clearCartOnSignOut() {
  yield put(clearCart())
}

export function* updateCartToFirebase() {
  const currentUser = yield select(selectCurrentUser);
  if (currentUser) {
    try {
      const cartRef = yield getUserCart(currentUser.id);
      const cartItems = yield select(selectCartItems);
      yield cartRef.update({ cartItems });
    } catch (error) {
      console.log(error);
    }
  }
}

export function* checkCartFromFirebase({ payload: user }) {
  const cartRef = yield getUserCart(user.id);
  const cartSnapshot = yield cartRef.get();
  yield put(getCartFromFirebase(cartSnapshot.data().cartItems));
}

export function* onCartChange() {
  yield takeLatest(
    [
      CartActionTypes.ADD_ITEM,
      CartActionTypes.REMOVE_ITEM,
      CartActionTypes.CLEAR_ITEM_FROM_CART
    ],
    updateCartToFirebase
  );
}

export function* onSignOutSuccess() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut)
}

export function* onUserSignIn() {
  yield takeLatest(UserActionTypes.SIGN_IN_SUCCESS, checkCartFromFirebase);
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess), call(onCartChange), call(onUserSignIn)]);
}