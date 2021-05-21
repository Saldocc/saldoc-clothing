import React from 'react'
import { connect } from 'react-redux'

import { addItem } from '../../redux/cart/cart.actions'

import CustomBtn from '../custom-btn/custom-btn.component'

import './collection-item.styles.scss'

const CollectionItem = ({ item, addItem }) => {
	const { name, imageUrl, price, salePrice, saleStatus, inStock } = item
	return (
		<div className="col-lg-3 col-md-4 col-sm-4 ">
			<div className="collection-item ">
				<img src={imageUrl} alt={`img-${name}`} className="image" />
				<div className="collection-footer">
					<div className="collection-footer-info">
						<span className="name">{name}</span>
						{inStock ? (
							<div className="price">
								{saleStatus ? (
									<>
										<span className="price-old">{price} ₺</span>
										<span className="price-new">{salePrice} ₺</span>
									</>
								) : (
									<span className="price-new">{price} ₺</span>
								)}
							</div>
						) : (
							<span>Out of stock</span>
						)}
					</div>
					{inStock && (
						<CustomBtn onClick={() => addItem(item)} btnType={'inverted'}>
							Add to Cart
						</CustomBtn>
					)}
				</div>
				{saleStatus && <div className="sale">SALE</div>}
			</div>
		</div>
	)
}

const mapDispatchToProps = (dispatch) => ({
	addItem: (item) => dispatch(addItem(item)),
})

export default connect(null, mapDispatchToProps)(CollectionItem)
