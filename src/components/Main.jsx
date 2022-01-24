import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { http } from '../services/httpServices';
import { getWeatherData } from '../utils/config';
import CurrentData from '../utils/currentContext';
import LoadingSpinner from './spinner';
import Navbar from './navbar/Navbar';
import Current from './current/Current';
import DayInfos from './DayDetails/DayInfos';
import Week from './days/Week';
import Hourly from './hourly/Hourly';
import Footer from './Footer';
import Alert from './Alert';

function Main(props) {
	const [data, setdata] = useState({});
	const [refresh, setrefresh] = useState(false);
	const [loading, setloading] = useState(true);
	const [weathFormat, setweathFormat] = useState('metric');
	const [curLoc, setcurLoc] = useState({ city: '', country: '' });
	const [coord, setcoord] = useState({ lat: '52.5065133', lon: '13.1445527' });

	const handleRefresh = () => {
		setloading(true);
		setrefresh(true);
	};

	const handleWeathFor = (format) => {
		setweathFormat(format);
		handleRefresh();
	};

	const getCurLoc = (coord, name, { country }) => {
		setcoord(coord);
		setcurLoc({ city: name, country });
	};

	const fetchCurData = async () => {
		const { lat, lon } = coord;
		try {
			const { data } = await http.get(getWeatherData(lat, lon, weathFormat));
			setdata(data);
			console.clear();
		} catch (error) {
			if (error) return toast.error('Internet is Slow...');
		}
	};

	useEffect(async () => {
		await fetchCurData();
		setrefresh(false);
		setloading(false);
	}, [coord, refresh]);

	const obj = {
		data,
		curLoc,
		getCurLoc,
		handleRefresh,
		handleWeathFor,
		weathFormat,
	};

	const backImage = {
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		backgroundImage: `linear-gradient(to right bottom, #1e293bbb,#0c4a6eb6),
		url(/images/${data.current?.weather[0].main}.jpg)`,
		backgroundColor: '#54483a',
	};

	return (
		<CurrentData.Provider value={obj}>
			{loading ? (
				<LoadingSpinner />
			) : (
				<div style={backImage} className='container'>
					<Navbar />
					{data.alerts && <Alert />}
					<Current />
					<Week />
					<Hourly />
					<DayInfos />
					<Footer />
				</div>
			)}
		</CurrentData.Provider>
	);
}

export default Main;
