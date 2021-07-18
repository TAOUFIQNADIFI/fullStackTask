import React  from 'react';
import ReactDOM from 'react-dom';
import PopUp from './PopUp.js'
import './footer.css';
import picture1 from '../images/picture1.jpg'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


//import App from './App';
import reportWebVitals from '../reportWebVitals';
import Header from './Header.js'
import Footer from './Footer.js'
import'bootstrap/dist/css/bootstrap.css';
import '../index.css';
import Main1 from './Main1';
import Main2 from './Main2';
import Main3 from './Main3';
import Pict from './Pict.js';



class App1 extends React.Component {

  

    constructor(props) {
        super(props);
          
        this.state = {
           header: "Header from state...",
           content: "Content from state...",
           propArray: [1,2,3,4,5],
           choosen : "",
           score : 0,
           selectedPic : "",
           isSelected : false ,
           pictures:[
            {
               url: 'task\src\images\picture1.jpg',
               name:'task\src\images\picture1.jpg',
               id: 1
            },

            {
                url: 'Second...',
                name:'',
               id: 2
            },

            {
                url: 'Third...',
                name:'',
               id: 3
            }
            
         ]

        
        }
   

        this.selectItem = this.selectItem.bind(this);
        //this.handleCallback = this.handleCallback(this);
      }
        


      handleCallback = (childData) =>{
        this.selectItem();
        this.setState({selectedPic: childData});

                console.log(childData)

        console.log(this.props.url)
        console.log(this.state.selectedPic);

    }


      selectItem(){

         this.setState({ isSelected: true });
         console.log(this.state.isSelected)         
        }

     
  
    render() {
      //console.log(this.state.pictures[0]);
const a = this.state.isSelected


      return(


          <div>
        
      <Header score = {this.state.score}/>

      {a 

             ? <Main2  selectedItem = {this.state.selectedPic}  
             parentCallback={this.handleCallback} />
             
             :<Main1  pic1 = {picture1}   parentCallback={this.handleCallback} 
             selectItem = {this.selectItem} content = {this.state.isSelected} value1={"helllooo"} />
              
              
      }
              
              
              <h1>{this.state.isSelected.toString()}   hooooo</h1>
              <h1>{this.state.selectedPic}   hooooo</h1>
              

              

              
              
      
      <Footer/>
      </div>
      );
    }
  }

  export default App1;

