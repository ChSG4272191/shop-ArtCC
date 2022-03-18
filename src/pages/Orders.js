import React from 'react';
import OrderItem from '../components/OrderItem';
import "../style/Orders.css";

const Orders = () => {
    return (
		<div>
        <div className="Orders">
			<div className="Orders-container">
				<h1 className="title">Mis ordenes</h1>
				<div className="Orders-content">
					<OrderItem />
				</div>
			</div>
		</div>
		</div>
    );
};

export default Orders;