import React, { useContext, useEffect, useState } from 'react';
import HourDetail from './HourDetail';
import HourHeading from './HourHeading';
import { HiArrowSmRight } from 'react-icons/hi';
import { HiArrowSmLeft } from 'react-icons/hi';
import CurrentData from '../../utils/currentContext';

function Hourly() {
	const [hours, sethours] = useState([]);
	let [index, setindex] = useState(0);
	let [lastIndex, setlastIndex] = useState(10);

	const { data } = useContext(CurrentData);
	const { hourly, timezone_offset } = data;

	const goForward = () => {
		if (lastIndex >= hourly.length) return;
		setindex((index += 10));
		setlastIndex((lastIndex += 10));
	};

	const goPrevious = () => {
		if (index <= 0) return;
		setindex((index -= 10));
		setlastIndex((lastIndex -= 10));
	};

	const showHours = () => {
		const totalHours = hourly;
		sethours(totalHours.slice(index, lastIndex));
	};

	useEffect(() => {
		showHours();
	}, [index]);

	return (
		<div className='hours--container'>
			<HourHeading />

			<button onClick={() => goForward()} className='hours__arrow--right '>
				<HiArrowSmRight />
			</button>

			<HourDetail hours={hours} timeZone={timezone_offset} />

			<button
				onClick={() => goPrevious()}
				className='hours__arrow--left disable'>
				<HiArrowSmLeft />
			</button>
		</div>
	);
}

export default Hourly;
