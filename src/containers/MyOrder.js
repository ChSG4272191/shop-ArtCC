import React from 'react';
import OrderItem from '../components/OrderItem';
import "../style/MyOrder.css";

const MyOrder = () => {
    return (
        <aside className="MyOrder">
			<div className="title-container">
				<img src="./icons/flechita.svg" alt="arrow" />
				<p className="title">Mi orden</p>
			</div>
			<div className="my-order-content">
				<OrderItem />
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>s/50</p>
				</div>
				<button className="primary-button">
					Verificar
				</button>
			</div>
		</aside>
    );
};

export default MyOrder;