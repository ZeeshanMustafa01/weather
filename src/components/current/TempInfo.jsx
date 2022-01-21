import React, { useContext } from 'react';
import { TiLocationArrow } from 'react-icons/ti';
import CurrentData from '../../utils/currentContext';

function TempInfo() {
	const currentData = useContext(CurrentData);
	const { data } = currentData;
	const { current } = data;

	return (
		<div className='more--info'>
			<ul className='more--info__box'>
				<li>Feels Like</li>
				<li>{current.feels_like.toFixed(0)} &deg;</li>
			</ul>
			<ul className='more--info__box'>
				<li>wind</li>
				<li>
					<TiLocationArrow />
				</li>
				<li>{current.wind_speed} mph</li>
			</ul>
			<ul className='more--info__box'>
				<li>visibility</li>
				<li>{(current.visibility * 0.000621).toFixed(2)} mi</li>
			</ul>
		</div>
	);
}

export default TempInfo;
