import React from 'react';
import NavBar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Clubs from './components/Clubs';
import Events from './components/Events';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
    return (
        <div className="App">
            <NavBar />
            <Home />
            <About />
            <Clubs />
            <Events />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
