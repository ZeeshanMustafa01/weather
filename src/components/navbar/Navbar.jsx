import React, { useContext } from 'react';
import NavIcons from './NavIcons';
import Search from '../search/Search';

function Navbar() {
	return (
		<div className='navbar'>
			<p className='navbar__heading'>Forecast</p>

			<div className='navbar__actions'>
				<NavIcons />
				<Search />
			</div>
		</div>
	);
}

export default Navbar;
