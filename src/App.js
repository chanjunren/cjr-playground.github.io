import React from 'react';
import {Route, Routes, BrowserRouter, Navigate} from 'react-router-dom';
import Home from './pages/home';
import Form from './pages/form';
import TicTacToe from './pages/tictactoe';
import Sidebar from './sidebar';


export default function App() {
	let routes = (
		<Routes>
			<Route path="/" element={<Home/>}/>
			<Route path="/form" element={<Form/>}/>
			<Route path="/tictactoe" element={<TicTacToe/>}/>
			<Route path="*" element={<Navigate to="/"/>}/>
		</Routes>
	);

  return (
		<BrowserRouter>
			<Sidebar/>
			{routes}
		</BrowserRouter>
	);
}
