import React from 'react';
import "../style/CreateAccount.css";


const CreateAccount = () => {
    return (
		<div>
        <div className="CreateAccount">
			<div className="CreateAccount-container">
				<h1 className="title">Mi cuenta</h1>
				<form action="/" className="form">
					<div>
						<label for="name" className="label">Nombre</label>
						<input type="text" id="name" placeholder="Christian" className="input input-name" />
						<label for="email" className="label">Correo electrónico</label>
						<input type="text" id="email" placeholder="christian@example.com" className="input input-email" />
						<label for="password" className="label">Contraseña</label>
						<input type="password" id="password" placeholder="*********" className="input input-password" />
					</div>
					<input type="submit" value="Crear" className="primary-button login-button" />
				</form>
			</div>
		</div>
		</div>
    );
};

export default CreateAccount;