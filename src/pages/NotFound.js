
import React from 'react';
import "../style/NotFound.css";
import error404 from "../assets/error-404.jpg";

const NotFound = () => {
    return (
        
        <div className='principal'>
			<h1 className='texto-1'>  Error 404<br></br></h1>
            <img src={error404} alt='error-404'/>
            <h2 className='texto-2'>Página no encontrada!</h2>
		</div>
       
    );
};

export default NotFound;