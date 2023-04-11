import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Components
import NavBar from './components/NavBar/NavBar';

//Import Router-dom
import Home from './components/Home/Home';
import ItemDetail from './components/ItemDetail/ItemDetail';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<NavBar />
					<Routes>
						<Route path="/" element={<Home />}></Route>
						<Route path="/category/:id" element={<ItemListContainer />}></Route>
						<Route path="/item/:id" element={<ItemDetail />}></Route>
					</Routes>
				</div>
			</Router>
		);
	}
}

export default App;
