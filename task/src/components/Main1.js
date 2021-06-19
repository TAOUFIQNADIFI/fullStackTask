import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';
import picture1 from '../images/picture1.jpg'
import picture2 from '../images/picture21.jpg'
import picture3 from '../images/picture3.jpg'


class Main1 extends React.Component {

  
  render() {
    

    return(

        <div className="container">
<div className="row">

    <div className="col-md-6 mx-auto">
    <a href="#"><img src={picture1} alt="" className="img-thumbnail"></img></a>

    </div>
</div>


<div className="row mix-auto">

    <div className="col-md-6">
    <a href="#"><img src={picture2} alt="" className="img-thumbnail"></img></a>
    </div>
    <div className="col-md-6">
     <a href="#"> <img src={picture3} alt="" className="img-thumbnail"></img></a> 
    </div>
</div>

        </div>
);
  }
}

export default Main1;