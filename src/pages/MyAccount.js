import React from 'react';
import "../style/MyAccount.css";

const MyAccount = () => {
	return (
		<div>
        <div className="MyAccount">
			<div className="MyAccount-container">
				<h1 className="title">Mi cuenta</h1>
				<form action="/" className="form">
					<div>
						<label for="name" className="label">Nombre</label>
						<p className="value">Christian</p>
						<label for="email" className="label">Correo Electronico</label>
						<p className="value">christian@gmail.com</p>
						<label for="password" className="label">Contraseña</label>
						<p className="value">*********</p>
					</div>
					<input type="submit" value="Editar" className="secondary-button login-button" />
				</form>
			</div>
		</div>
		</div>
    );
};

export default MyAccount;