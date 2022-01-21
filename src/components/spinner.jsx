import React from 'react';
import { CgSpinner } from 'react-icons/cg';

function LoadingSpinner(props) {
	return (
		<div className='overlay'>
			<div className='spinner'>
				<CgSpinner />
			</div>

			<p className='loading'>Loading... </p>
		</div>
	);
}

export default LoadingSpinner;
