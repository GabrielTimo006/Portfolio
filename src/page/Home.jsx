import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Main from '../components/Main';

const Home = () => {
    return (
        <div className="home">
            <Navbar />
            <Header />
            <Main />
            <Footer />
        </div>
    );
};

export default Home;