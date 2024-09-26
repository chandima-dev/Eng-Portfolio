// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home'; 
import ContactUs from './pages/ContactUs/ContactUs'; 
import Slider from './components/Slider/Slider'; 

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        
        <Routes>
          <Route path="/" element={
            <>
              <Slider /> 
              <Home />
            </>
          } />
          <Route path="/contactus" element={
            <>
              <Slider /> 
              <ContactUs />
            </>
          } />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
