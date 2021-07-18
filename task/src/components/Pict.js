import React  from 'react';
import ReactDOM from 'react-dom';
import PopUp from './PopUp.js'
import pic1 from "../images/picture1.jpg"



class Pict extends React.Component {
  
    onTrigger = (event) => {
        this.props.parentCallback(this.props.url);
        event.preventDefault();
        console.log(this.props.url);
    } 


  
    render(props) {

  console.log(props);
      return(
    
  
          <img onClick = {this.onTrigger} src= {this.props.url} 
          alt="" className="img-thumbnail"></img>
        
  );
    }
  }
  
  export default Pict;