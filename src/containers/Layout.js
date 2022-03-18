import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';


const layout = ({children}) => {
    return (
        <div className="Layout">
			<Header />
			{children}
            <Footer/>
		</div>
    );
};

export default layout;