import React from 'react';
import "../style/SendEmail.css";

const SendEmail = () => {
    return (
		<div>
        <div className="SendEmail">
			<div className="form-container">
				<img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" />
				<h1 className="title">¡E-mail ha sido enviado!</h1>
				<p className="subtitle">Consulte su bandeja de entrada para obtener instrucciones sobre cómo restablecer la contraseña.</p>
				<div className="email-image">
					<img src="./icons/email.svg" alt="Correo" />
				</div>
				<button className="primary-button login-button">Iniciar sesión</button>
				<p className="resend">
					<span>No recibiste el correo?</span>
					<br/>
					<a href="/login">Reenviar</a>
				</p>
			</div>
		</div>
		</div>
    );
};

export default SendEmail;