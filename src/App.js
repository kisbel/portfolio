import React from 'react';
import Home from './Home/Home.jsx'
import Nav from './Nav/Nav.jsx';
import Footer from './Footer/Footer.jsx';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import About from './About/About.jsx';
import Portfolio from './Portfolio/Portfolio';
import ContactPage from './Contact/ContactPage';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/portfolio" component={Portfolio} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
