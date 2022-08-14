import React from 'react';
import { BrowserRouter, BrowserRouter as Switch, Router, Route} from 'react-router-dom';
import  Collection from './Collection';
// import Contacts from './Contacts';
import Closet from './Closet';
import Allproducts from './Allproducts';
import Navbar from './Navbar';

function App() {
  return (   
    <Router>
    <div className="App">
      <Navbar />
       <Switch>
        <Route exact path="/" element={<Closet />} />
        <Route path="/Allproducets" element={<Allproducts />} />
        <Route path="/Collection" element={<Collection />} />
       </Switch>  
     
    </div>
    </Router>
  );
}

export default App;