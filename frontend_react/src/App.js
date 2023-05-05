import React from 'react';
import './App.css';
import Classifier from './components/Classifier/Classifier';
import ImageList from './components/ImageList/ImageList';
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import FAQ from './components/FAQ/FAQ';
import Footer from './components/Footer/Footer';
import SignUp from "./components/SignUp/SignUp"
import Login from "./components/Login/Login"
import { Route, BrowserRouter } from 'react-router-dom';


function App() {
	return (
		<BrowserRouter>
			<Navigation />
			<div className='App'>
				<Route exact path='/' component={Home} />
				<Route path='/classification' component={Classifier} />
				<Route path='/history' component={ImageList} />
				<Route path='/faq' component={FAQ} />
				{/* <Route path='/sign-up' component={SignUp} />
				<Route path='/login' component={Login} /> */}
			</div>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
