import React from 'react';
import ReactDOM from 'react-dom';
//import './main1.css';
import picture1 from '../images/picture1.jpg'
import picture2 from '../images/pictres21.jpg'
import picture3 from '../images/picture3.jpg'


class Main1 extends React.Component {

  
  render() {
    

    return(

        <div className="container">
<div className="row">

    <div className="col-md-6 mx-auto">
    <img src={picture1} alt="Responsive image" class="img-fluid"></img>

    </div>
</div>
<div className="row">

    <div className="col-md-6">
    <img src={picture2} alt="Responsive image" class="img-fluid"></img>
    </div>
    <div className="col-md-6">
    <img src={picture3} alt="Responsive image" class="img-fluid"></img>
    </div>
</div>

        </div>
);
  }
}

export default Main1;