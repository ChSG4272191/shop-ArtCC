import React from 'react';
import "../style/Login.css";

const Login = () => {
    return (
        <div className="Login">
			<div className="Login-container">
				<img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" />
				<form action="/" className="form">
					<label htmlFor="email" className="label">Correo electronico</label>
					<input type="text" id="email" placeholder="nombre.apellido@gmai.com" className="input input-email" />
					<label htmlFor="password" className="label">Contraseña</label>
					<input type="password" id="password" placeholder="*********" className="input input-password" />
					<input type="submit" value="Iniciar Sesión" className="primary-button login-button" />
					<a href="/">Olvide mi contraseña</a>
				</form>
				<button className="secondary-button signup-button">Registrarse</button>
			</div>
		</div>
    );
};

export default Login;