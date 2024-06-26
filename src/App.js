import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';
import About from './components/About';
import Buycars from './components/Buycars';
import Sellcars from './components/Sellcars';
import Finance from './components/Finance';
import CustomerReview from './components/CustomerReview';
import Home from './components/Home';
import Stocks from './components/Stocks';
import ContactUs from './components/ContactUs';
import Gallery from './components/Gallery';
import VehicleDetails from './components/VehicleDetails';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/stocks" element={<Stocks />} />
            <Route path="/sellcars" element={<Sellcars />} />
            <Route path="/finance" element={<Finance />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/happy-customers" element={<CustomerReview />} />
            <Route path="/vehicle-details/:id" element={<VehicleDetails />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
};

export default App;
