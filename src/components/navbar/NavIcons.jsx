import React, { useContext, useState } from 'react';
import { MdRefresh } from 'react-icons/md';
import { AiOutlineStar } from 'react-icons/ai';
import { AiTwotoneStar } from 'react-icons/ai';
import { BsMoon } from 'react-icons/bs';
import { BsSun } from 'react-icons/bs';
import CurrentData from '../../utils/currentContext';

function NavIcons() {
	const [fav, setfav] = useState(false);
	const [backColor, setbackColor] = useState('dark');

	const { handleRefresh } = useContext(CurrentData);

	const handleFav = () => {
		setfav(!fav);
	};

	const handleFavIcon = () => {
		if (fav) return <AiTwotoneStar className='nav--icon' />;
		return <AiOutlineStar className='nav--icon' />;
	};

	const handleBackColor = () => {
		setbackColor(!backColor);
	};

	const handleBackColIcon = () => {
		if (backColor) return <BsMoon className='nav--icon' />;
		return <BsSun className='nav--icon' />;
	};

	return (
		<div className='nav--icons'>
			<MdRefresh onClick={handleRefresh} className='nav--icon nav--icon__re' />

			<div onClick={handleFav} className='nav--icons__box'>
				{handleFavIcon()}
			</div>

			<div onClick={handleBackColor} className='nav--icons__box'>
				{handleBackColIcon()}
			</div>
		</div>
	);
}

export default NavIcons;
