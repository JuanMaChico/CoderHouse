import React from 'react';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

const NavBar = () => {
	return (
		<div className="NavBar">
			<Link className="logo" to={'/'}>
				<h1>Techno Music</h1>
			</Link>
			<ul>
				<div>
					<Link className="link" to={'/'}>
						<div>
							<p>Inicio</p>
						</div>
					</Link>
				</div>
				<Link className="link" to={'/category/:id'}>
					<div>
						<p>Rock</p>
					</div>
				</Link>
				<Link className="link" to={'/category/:id'}>
					<div>
						<p>Techno</p>
					</div>
				</Link>
			</ul>
			<div className="ShopNavBar">
				<CartWidget />
				<p>10</p>
			</div>
		</div>
	);
};

export default NavBar;
