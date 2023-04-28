import React from 'react';
import './App.css';
import Classifier from './components/Classifier/Classifier';
import ImageList from './components/ImageList/ImageList';
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import { Route, BrowserRouter } from 'react-router-dom';


function App() {
	return (
		<BrowserRouter>
			<Navigation />
			<div className='App'>
				<Route exact path='/' component={Home} />
				<Route path='/classification' component={Classifier} />
				<Route path='/history' component={ImageList} />
			</div>
		</BrowserRouter>
	);
}

export default App;
