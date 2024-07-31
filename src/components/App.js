import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavigationBar from './Navbar';
import Footer from './Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <div>
      <NavigationBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
