import React, { useContext } from 'react';
import CurrentData from '../../utils/currentContext';

function DayDetails() {
	const { data } = useContext(CurrentData);
	const { daily } = data;
	const { weather, temp } = daily[0];
	const { description, main } = weather[0];
	const { min, max } = temp;

	return (
		<div className='details'>
			<div className='details__day'>
				<h3 className='details__heading'>Day</h3>
				<p>{`Today would be  ${description}`}.</p>
				<p>
					{`Lowest Temp would be ${Math.round(min)}`}&deg;
					{` and the highest would be ${Math.round(max)}`}&deg;.
				</p>
			</div>

			<div className='details__night'>
				<h3 className='details__heading'>Night</h3>
				<p>{`Night be like  ${main}`}.</p>
				<p>{`night lowest temp would be  ${Math.round(min)}`}&deg;.</p>
			</div>
		</div>
	);
}

export default DayDetails;
