import React from 'react'

import './alert.styles.scss'

/*Alert type => default, success, warning, error*/

const Alert = ({ alertType, children }) => {
	return <div className={`${alertType} alert`}>{children}</div>
}

export default Alert
