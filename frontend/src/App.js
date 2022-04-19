import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import SupplierRegistration from './components/SupplierRegistration';
import ListSupplierRegistration from './components/ListSupplierRegistration';
import EditSupplierRegistration from './components/EditSupplierRegistration';

import Footer from './components/Footer';
import NavBar from './components/NavBar';



class App extends Component{
  render(){
    return(
      <Router>
        <NavBar/> {/* Create navbar */}
        <div style = {{backgroundColor:'#e0f6fc',  margin:"0"}}>
        
          
          <Route path="/SupplierRegistration" exact component={SupplierRegistration}></Route>
          <Route path="/ListSupplierRegistration" exact component={ListSupplierRegistration}></Route>
          <Route path="/EditSupplierRegistration/:id" exact component={EditSupplierRegistration}></Route>
          


          <div style={{paddingTop:'0px',width:'100%'}}>
          {/* Create footer */}
            <Footer />
          </div>
        </div>
      </Router>
    )
  }
}
export default App;