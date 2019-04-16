import React, { Component } from 'react';
import {Link} from 'react-router-dom'


 class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">



    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark" id="navlist">
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link" to={"/"} id="home">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={"/menu"} id="menu">Menu</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={"/checkout"} id="chkout">checkout</Link>
                    </li>
                </ul>
            </div>



            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to={"/signup"} id="signup">Sign up</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={"/login"} id="login">Login</Link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>



     
      </div>
    );
  }
}

export default Navbar;