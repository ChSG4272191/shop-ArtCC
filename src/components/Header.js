import React from 'react';
import "../style/Header.css";

const Header = () => {
    return (
        <nav>
			<img src="./icons/icon_menu.svg" alt="menu" className="menu" />
			<div className="navbar-left">
				<img src="#" alt="logo" className="logo" />
				<ul>
					<li>
						<a href="/">Todo</a>
					</li>
					<li>
						<a href="/">USB</a>
					</li>
					<li>
						<a href="/">Diseños USB</a>
					</li>
					<li>
						<a href="/">Otros</a>
					</li>
				</ul>
			</div>
			<div className="navbar-right">
				<ul>
					<li className="navbar-email">nombre@gmail.com</li>
					<li className="navbar-shopping-cart">
						<img src="#" alt="Carta" />
						<div>2</div>
					</li>
				</ul>
			</div>
		</nav>
    );
};

export default Header;