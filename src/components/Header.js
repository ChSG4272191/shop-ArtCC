import React from 'react';
import "../style/Header.css";
import house from '../icons/house.png';

const Header = () => {
    return (
        <nav>
			<img src={house} alt="menu" className="menu" />
			<div className="navbar-left">
				<img src="#" alt="logo" className="logo" />
				<ul>
					<li>
						<a href="/login">Login</a>
					</li>
					<li>
						<a href="/signup">Crear cuenta</a>
					</li>
					<li>
						<a href="/">Home</a>
					</li>
					<li>
						<a href="*">Otros</a>
					</li>
				</ul>
			</div>
			<div className="navbar-right">
				<ul>
					<li className="navbar-email">nombre@gmail.com</li>
					<li className="navbar-shopping-cart">
						<img src="" alt="Carta" />
						<div>2</div>
					</li>
				</ul>
			</div>
		</nav>
    );
};

export default Header;