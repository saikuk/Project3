import React, { Component } from 'react';
import Navbar from '../components/Navbar';

class Completedorder extends Component {
   render() {
       return (

           <div className="Completedorder">
               <br />
               <br />
               <br />
               <div className="text-center">
                   <div className="container" id="completedorderpage">
                       <h2> Please review the order and submit.</h2>
                       <hr />





                       <button className="btn btn-danger">Submit order</button>
                   </div>

               </div>
           </div>
       );
   }
}

export default Completedorder;