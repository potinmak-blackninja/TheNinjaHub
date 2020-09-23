import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import AboutMe from './components/pages/AboutMe';
import Gallery from './components/pages/Gallery';
import Elly from './components/pages/Elly';
import Kay from './components/pages/Kay';
import Tosaka from './components/pages/Tosaka';
import Likiya from './components/pages/Likiya';
import ContactForm from './components/pages/ContactForm';
import SignUp from './components/pages/SignUp';

function App() {

  
  return (
    <>
      <Router>
        <Navbar /> 
        <ScrollToTop />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={AboutMe} />
          <Route path='/contact' exact component={ContactForm} />
          <Route path='/sign-up' exact component={SignUp} />
          <Route path='/posts' exact component={Gallery} />
          <Route path='/artists/elly' exact component={Elly}/>
          <Route path='/artists/kay' exact component={Kay}/>
          <Route path='/artists/tosaka' exact component={Tosaka}/>
          <Route path='/artists/likiya' exact component={Likiya}/>
          <Route path='/github' exact component={() => { window.location.href = 'https://github.com/potinmak-blackninja';}}/>
          <Route path='/instagram' exact component={() => { window.location.href = 'https://www.instagram.com/elly24soul/';}}/>
          <Route path='/linkedin' exact component={() => { window.location.href = 'https://www.linkedin.com/in/po-tin-mak-13480ab7/';}}/>
          <Route path='/twitter' exact component={() => { window.location.href = 'https://twitter.com/elly24soul';}}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
