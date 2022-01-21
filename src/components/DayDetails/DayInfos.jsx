import React from 'react';
import DayDetails from './DayDetails';
import DayOthers from './DayOthers';
import Moon from './Moon';
import Sun from './Sun';

function DayInfos() {
	return (
		<div className='dayInfo animate__fadeInUp'>
			<h2 className='dayInfo__heading'>Day Details</h2>
			<div className='dayInfo__box'>
				<DayDetails />
				<Sun />
				<Moon />
				<DayOthers />
			</div>
		</div>
	);
}

export default DayInfos;
