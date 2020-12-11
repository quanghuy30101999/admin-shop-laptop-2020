import React, { Component } from 'react';
import ListProducts from './ListProducts';
import Sidebar from './Sidebar';

class Body extends Component {
    render() {
        return (
           <div className="row" >
               <Sidebar />
               <ListProducts />
           </div>
        );
    }
}

export default Body;