import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';
import picture1 from '../images/picture1.jpg'
import picture2 from '../images/picture21.jpg'
import picture3 from '../images/picture3.jpg'


class Main2 extends React.Component {

  
  render() {
    

    return(

        <div className="container">

<div className="row ">

    <div className="col-md-4">
    <a href="#"><img src={picture2} alt="" className="img-thumbnail"></img></a> 
    </div>

    <div className="col-md-4">
    <a href="#"></a>
    </div>

    <div className="col-md-4">
    <a href="#"> <img src={picture3} alt="" className="img-thumbnail"></img></a>
    </div>
</div>

        </div>
);
  }
}

export default Main2;