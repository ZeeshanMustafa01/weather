import React from 'react';
import { HiSearch } from 'react-icons/hi';
import { TiDelete } from 'react-icons/ti';

function SearchIcons({ search, onDelete, coords }) {
	return (
		<div className='search__icons'>
			{search && <TiDelete onClick={onDelete} className='search__icon' />}
			<HiSearch onClick={coords} className='search__icon' />
		</div>
	);
}

export default SearchIcons;
