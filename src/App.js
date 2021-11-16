import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import HomeComponent from './components/home';
import AboutComponent from './components/about';


function App() {
	
	const counter = useSelector(state => state.counter);
	const data = useSelector(state => state.data);
	const dispatch = useDispatch();

	console.log(data);
	
	useEffect(() => {
		dispatch({type: 'GET_DATA_ASYNC'});
	}, []);
	
	return (
		<>
			<Router>
				<Route path="/" exact component={HomeComponent}/>
				<Route path="/about" component={AboutComponent}/>
				
				<Link to="/">Home</Link>
				<Link to="/about">About</Link>
				<div className="App">
					Counter: {counter}
					<br/>
					<button type="button" onClick={() => dispatch({type: 'INCREMENT_ASYNC'})}>+</button>
					<button type="button" onClick={() => dispatch({type: 'DECREMENT_ASYNC'})}>-</button>
					<ul>
					{data.map(d => {
						return (
							<li key={d.id}>{d.title}</li>
						)
					})}
					</ul>
				</div>
			</Router>
		</>
	);
}

export default App;
