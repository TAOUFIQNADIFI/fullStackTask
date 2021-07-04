import React from 'react';
import ReactDOM from 'react-dom';
import './Header.css';


class Header extends React.Component {

  
  render(props) {
    

    return(
<div  className = "container">
<div className = "jumbotron" >
<div className="row" >
  <div className="col-sm-4">

  
<h3 >ROCK</h3>
    <h3>PAPER</h3>
    <h3 >SCISSORS</h3>
    </div>
    <div className = "col-sm-4"></div>
    <div className = "col-sm-4">
<div className = "square ">
  <h4 className="text-center">Score</h4>
  <h4>{this.props.score}</h4>


</div>

    </div>
    </div>
</div>



    
   
    </div>);
  }
}

export default Header;