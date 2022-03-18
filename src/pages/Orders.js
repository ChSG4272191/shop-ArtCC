import React from 'react';
import OrderItem from '../components/OrderItem';
import "../style/Orders.css";
import Header from '../components/Header';
import Footer from '../components/Footer';

const Orders = () => {
    return (
		<div>
			<Header/>
        <div className="Orders">
			<div className="Orders-container">
				<h1 className="title">Mis ordenes</h1>
				<div className="Orders-content">
					<OrderItem />
				</div>
			</div>
		</div>
		<Footer/>
		</div>
    );
};

export default Orders;