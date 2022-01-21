import './css/App.css';
import Main from './components/Main';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import React from 'react';

function App(props) {
	return (
		<div className='main--ui'>
			<ToastContainer />
			<Main />
		</div>
	);
}

export default App;
