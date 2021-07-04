import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';
import picture1 from '../images/picture1.jpg'
import picture2 from '../images/picture21.jpg'
import picture3 from '../images/picture3.jpg'
import Pict from './Pict.js'


class Main1 extends React.Component {

  
  

  
  render(props) {
    

    return(

        <div className="container">
<div className="row">

    <div className="col-md-6 mx-auto" name= "pictures1">
    <a><Pict url = {this.props.pic1} selectItem = {this.props.selectItem}  parentCallback={this.props.parentCallback}/></a>

    </div>
</div>


<div className="row mix-auto">

    <div className="col-md-6" name= "pictures2">
    <a> <Pict url = {picture2} selectItem = {this.props.selectItem}/> </a>
    </div>
    <div className="col-md-6" name= "pictures3">
     <a> <Pict url = {picture3} selectItem = {this.props.selectItem}/></a> 
    </div>
    <div><h1>{this.props.content}</h1>
    <h1>{this.props.value1}</h1>
    
    </div>
</div>

        </div>
);
  }
}

export default Main1;