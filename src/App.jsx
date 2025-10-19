import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import Loader from './components/Loader';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 2-3 seconds
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <Home />
          <hr className="border-t border-gray-700 my-12 w-11/12 mx-auto" />
          <Footer />
        </>
      )}
    </Router>
  );
}

export default App;
