import React from 'react';
import ProductList from '../containers/ProductList';
import Header from '../components/Header';
import Footer from '../components/Footer';


const Home = () => {
    return (
        <>
            <Header/>
			<ProductList />
            <Footer/>
		</>
    );
};

export default Home;