import React, { useContext, useState } from 'react';
import SearchIcons from './SearchIcons';
import { getCityCoords } from '../../utils/config';
import { http } from '../../services/httpServices';
import { toast } from 'react-toastify';
import CurrentData from '../../utils/currentContext';

function Search() {
	const [search, setsearch] = useState('');

	const currentData = useContext(CurrentData);
	const { getCurLoc, handleRefresh } = currentData;

	const handleChange = ({ target }) => {
		setsearch(target.value);
	};

	const deleteInput = () => {
		setsearch('');
	};

	const handleCityCoords = async (e) => {
		e.preventDefault();

		if (search.trim() === '') return;
		try {
			const res = await http.get(`${getCityCoords(search)}`);
			const { coord, name, sys } = res.data;
			getCurLoc(coord, name, sys);
			getCityCoords(search);
			handleRefresh();
			setsearch('');
		} catch (error) {
			console.clear();
			if (error) return toast.error('Please check your search again');
		}
	};

	return (
		<form onSubmit={handleCityCoords} className='search'>
			<input
				type='text'
				id='location'
				value={search}
				placeholder='search city'
				onChange={handleChange}
				className='search__input'
			/>

			<SearchIcons
				search={search}
				onDelete={deleteInput}
				coords={handleCityCoords}
			/>
		</form>
	);
}

export default Search;
