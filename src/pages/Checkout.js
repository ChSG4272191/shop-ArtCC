import React from 'react';
import OrderItem from '../components/OrderItem';
import "../style/Checkout.css";
import Header from '../components/Header';
import Footer from '../components/Footer';

//import Menu from '../components/Menu';

const CheckOut = () => {
    return (
		<div>
		<Header/>
        <div className="Checkout">
			<div className="Checkout-container">
				<h1 className="title">Mi orden:</h1>
				<div className="Checkout-content">
					<div className="order">
						<p>
							<span>Marzo</span>
							<span>6 unidades</span>
						</p>
						<p>s/1.00</p>
					</div>
				</div>
				<OrderItem />
			</div>
		</div>
		<Footer/>
		</div>
    );
};

export default CheckOut;