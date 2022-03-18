import React from "react";
import  "../style/footer.css";
import contact from '../icons/contact.png';
import facebook from '../icons/facebook.png';
import twitter from '../icons/twitter.png';
import instagram from '../icons/instagram.png';
import house from '../icons/house.png';
import phone from '../icons/smartphone.png';

const footer = () => {
  return (
      <div className="general">
    <div className="container-footer-all">
    <div className="container-body">
        <div className="colum1">
            <h1>Mas informacion de la compañia</h1>
            <p>Esta compañia se dedica a la venta de ...</p>
        </div>
        <div className="colum2">
            <h1>Redes Sociales</h1>
            <div className="row">
                <img src={facebook}/>
                <label>Siguenos en Facebook</label>
            </div>
            <div className="row">
                <img src={twitter}/>
                <label>Siguenos en Twitter</label>
            </div>
            <div className="row">
                <img src={instagram}/>
                <label>Siguenos en Instagram</label>
            </div>


        </div>

        <div className="colum3">

            <h1>Informacion Contactos</h1>

            <div className="row2">
                <img src={house}/>
                <label>Peru, Ayacucho, Huamanga</label>
            </div>

            <div className="row2">
                <img src={phone}/>
                <label>+51 997194824</label>
            </div>

            <div className="row2">
                <img  src={contact}/>
                 <label>christian@gmail.com</label>
            </div>

        </div>

    </div>

</div>
<div className="container-footer">
       <div className="footer">
            <div className="copyright">
                © 2022 Todos los Derechos Reservados | <a href="">ArtCC</a>
            </div>

            <div className="information">
                <a href="">Informacion Compañia</a> | <a href="">Privacion y Politica</a> | <a href="">Terminos y Condiciones</a>
            </div>
        </div>

    </div> 
    </div>
  );
};

export default footer;
