import React,{ Suspense,useState } from 'react';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbarr from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import About from './components/About';
import Services from './components/Services';
import SscrollToTop from './components/ScrollToTop';
import RealState from './components/Realstate';
import Maritime from './components/Maritime';
import Banking from './components/Banking';
import Criminal from './components/Criminal';
import Litigation from './components/Litigation';
import Labor from './components/Labor';
import LocaleContext from 'components/LocaleContext';
import  {ContactUs}  from './components/ContactUs';
import AOS from 'aos';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import './i18n' ;
import "../node_modules/jquery/dist/jquery.min.js";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import i18n from "i18next";
import Helmet from 'react-helmet';
import { ThemeProvider } from 'react-bootstrap';

function App() {
  const [locale, setLocale] = useState(i18n.language);

  i18n.on('languageChanged', (lng) => setLocale(i18n.language));
  
  
  
   document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() { AOS.refresh(); }, 500);
});

  AOS.init({
    duration :1100,
    once:false,
  });

  return (
    
    <React.Fragment>
      <LocaleContext.Provider value={{locale, setLocale}}>
      <Suspense>
      <Helmet htmlAttributes={{
          lang: locale,
          dir: locale === 'en' ? 'ltr' : 'rtl'
        }} />
      
      <SscrollToTop>
      <ThemeProvider dir={locale === 'en' ? 'ltr' : 'rtl'}>
      <Navbarr />
      <Routes>
      <Route  path='/home' element={<Home/>} />
      <Route  path='/' element={<Home/>} />
      <Route  path='Aboutus' element={<About/>} />
      <Route  path='services' element={<Services/>} />
      <Route  path='contactus' element={<ContactUs/>} />
      <Route  path='realstate' element={<RealState/>} />
      <Route  path='maritime' element={<Maritime/>} />
      <Route  path='banking' element={<Banking/>} />
      <Route  path='criminal' element={<Criminal/>} />
      <Route  path='litigation' element={<Litigation/>} />
      <Route  path='labor' element={<Labor/>} />
      </Routes>
      </ThemeProvider>
      </SscrollToTop> 
      <Footer/>
      
     </Suspense>
     </LocaleContext.Provider>
    </React.Fragment>
  
  );
}

export default App;
