import React from 'react';
import OrderItem from '../components/OrderItem';
import "../style/Checkout.css";


//import Menu from '../components/Menu';

const CheckOut = () => {
    return (
		<div>
		
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
		
		</div>
    );
};

export default CheckOut;