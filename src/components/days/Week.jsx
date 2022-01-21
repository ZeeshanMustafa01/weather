import React from 'react';
import Day from './Day';

function Week() {
	return (
		<div className='week animate__fadeInUp'>
			<h2 className='week__heading'>Daily</h2>
			<Day />
		</div>
	);
}

export default Week;
