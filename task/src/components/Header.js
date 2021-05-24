import React from 'react';
import ReactDOM from 'react-dom';
import './Header.css'

class Header extends React.Component {

  
  render() {
    

    return(
    <div className = "Header"> 
    <div>
    <h3 >ROCK</h3>
    <h3>PAPER</h3>
    <h3 >SCISSORS</h3>
    </div>
    

    
    </div>);
  }
}

export default Header;