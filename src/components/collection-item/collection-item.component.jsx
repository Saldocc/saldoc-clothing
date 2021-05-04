import React from 'react'
import { connect } from 'react-redux'

import CustomBtn from '../custom-btn/custom-btn.component'
import { addItem } from '../../redux/cart/cart.actions'
import './collection-item.styles.scss'

const CollectionItem = ({ item, addItem }) => {
	const { name, imageUrl, price } = item
	return (
		<div className="collection-item">
			<img src={imageUrl} alt={`img-${name}`} className="image" />
			<div className="collection-footer">
				<div className="collection-footer-info">
					<span className="name">{name}</span>
					<span className="price">{price} ₺</span>
				</div>
				<CustomBtn onClick={() => addItem(item)} btnType={'inverted'}>
					Add to Cart
				</CustomBtn>
			</div>
		</div>
	)
}

const mapDispatchToProps = (dispatch) => ({
	addItem: (item) => dispatch(addItem(item)),
})

export default connect(null, mapDispatchToProps)(CollectionItem)
