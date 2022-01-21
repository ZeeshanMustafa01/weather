import React, { useContext } from 'react';
import { CgDanger } from 'react-icons/cg';
import CurrentData from '../utils/currentContext';

function Alert() {
	const { data } = useContext(CurrentData);
	const { alerts } = data;
	return (
		<div className='alert'>
			<CgDanger />
			<p className='alert--text'>
				{alerts[0].event} {alerts[0].description}
			</p>
		</div>
	);
}

export default Alert;
