import React from 'react'

import { ReactComponent as SearchOutlinedIcon } from '../../assets/search-outlined.svg'

import './search-icon.styles.scss'

const SearchIcon = () => {
	return (
		<div className="search-icon">
			<SearchOutlinedIcon className="search-outlined-icon" />
		</div>
	)
}

export default SearchIcon
