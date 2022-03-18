import React from 'react';
import "../style/PasswordRecovery.css";
import Header from '../components/Header';
import Footer from '../components/Footer';

const PasswordRecovery = () => {
    return (
		<div>
<Header/>
        <div className="PasswordRecovery">
			<div className="PasswordRecovery-container">
				<img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" />
				<h1 className="title">Recuperar contraseña</h1>
				<p className="subtitle">Escriba el correo registrado anteriormente</p>
				<form action="/" className="form">
					<label htmlFor="email" className="label">Dirección de correo electrónico:</label>
					<input type="text" id="email" className="input input-email" />
					<input type="submit" value="Confirmar" className="primary-button login-button" />
				</form>
			</div>
		</div>
		<Footer/>
		</div>
    );
};

export default PasswordRecovery;