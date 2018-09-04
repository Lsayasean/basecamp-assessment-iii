import React, {Component} from 'react';
import './navbar.css'

class Navbar extends Component{
    render(){
        return(
            <header>
                <h2>Wonders of the Galazy</h2>
                <nav>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </nav>
            </header>
        );
    }
}

export default Navbar;