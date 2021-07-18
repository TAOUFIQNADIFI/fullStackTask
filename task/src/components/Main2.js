import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';
import picture1 from '../images/picture1.jpg'
import picture2 from '../images/picture21.jpg'
import picture3 from '../images/picture3.jpg'
import Pict from './Pict.js';



class Main2 extends React.Component {

  
  render(props) {
    

    return(

        <div className="container">

<div className="row ">

    <div className="col-md-4">
      <h3>YOU PICKED</h3>
      <a> <Pict url = {this.props.selectedItem}  
       parentCallback={this.props.parentCallback}/> </a>
    </div>

    <div className="col-md-4">
    <a href="#"></a>

    </div>

    <div className="col-md-4">
    <h3>THE HOUSE PICKED</h3>

    <a> <Pict url = {this.props.selectedItem}   
    parentCallback={this.props.parentCallback}/> </a>
    </div>
</div>

        </div>
);
  }
}

export default Main2;