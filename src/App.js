// Import necessary components and hooks
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import your components
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import RoutesConfig from './config/Routes'; // Assuming this is where your routes are defined

// Define your App component
function App() {
    return (
        <Router>
            <Routes>
                {/* Use the Route component as a child of Routes */}
                <Route
                    path="/*"
                    element={(
                        <>
                            <Header />
                            <RoutesConfig />
                            <Footer />
                        </>
                    )}
                />
            </Routes>
        </Router>
    );
}

export default App;
