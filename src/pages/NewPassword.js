import React from "react";
import "../style/NewPassword.css";
import Header from '../components/Header';
import Footer from '../components/Footer';

const NewPassword = () => {
  return (
    <div>
		<Header/>
    <div className="NewPassword">
      <div className="NewPassword-container">
        <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" />
        <h1 className="title">Crea una nueva cosntraseña</h1>
        <p className="subtitle">Ingresa una nueva cuenta para tu cuenta!</p>
        <form action="/" className="form">
          <label for="password" className="label">
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            placeholder="*********"
            className="input input-password"
          />
          <label for="new-password" className="label">
            Confirmar contraseña
          </label>
          <input
            type="password"
            id="new-password"
            placeholder="*********"
            className="input input-password"
          />
          <input
            type="submit"
            value="Aceptar"
            className="primary-button login-button"
          />
        </form>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default NewPassword;
