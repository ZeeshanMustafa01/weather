import React from 'react';
import { circleSvg } from '../../../utils/percentCircle';

function Clouds({ clouds }) {
	return (
		<div className='clouds'>
			<h3 className='clouds__heading'>Clouds</h3>
			{circleSvg(clouds)}
		</div>
	);
}

export default Clouds;
