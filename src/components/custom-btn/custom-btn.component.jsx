import React from 'react'

import './custom-btn.style.scss'

const CustomBtn = ({ children, btnType, ...otherProps }) => {
	return (
		<button className={`${btnType ? btnType : ""} custom-btn`} {...otherProps}>
			{children}
		</button>
	)
}

export default CustomBtn
