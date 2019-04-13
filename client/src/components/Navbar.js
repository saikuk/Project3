import React, { Component } from 'react';


 class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">



    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark" id="navlist">
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="#" id="home">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" id="menu">Menu</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" id="chkout">checkout</a>
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