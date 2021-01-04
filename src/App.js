import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Products from './components/pages/products';
import Recipes from './components/pages/recipes';
import Reviews from './components/pages/reviews';
import Contact from './components/pages/contact';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/products' exact component={Products} />
          <Route path='/recipes' exact component={Recipes} />
          <Route path='/reviews' exact component={Reviews} />
          <Route path='/contact' exact component={Contact} />
          <Route path='/'component={Home}/>

        </Switch>
      </Router>
    </>
  );
}

export default App;