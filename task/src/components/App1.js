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
           isSelected : "" ,
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
      }
        
      
      selectItem(){
        const a = true;

         this.setState({ isSelected: true });
         this.setState({selectedPic: this.props.url})
         console.log(this.state.isSelected)
         console.log(this.props.url)

         
        }

     
  
    render() {
      //console.log(this.state.pictures[0]);


      return(
          <div>
        <React.StrictMode>
        <Router>
        
      <Header score = {this.state.score}/>
      <Switch>
              <Route exact path="/main1">
               <Main1  pic1 = {picture1} selectItem = {this.selectItem} content = {this.state.isSelected} value1={"helllooo"} />
              <h1>{this.state.isSelected.toString()}   hooooo</h1>
              <h1>{this.state.selectedPic}   hooooo</h1>

              
              </Route>
              <Route path="/main2">
                <Main2 />
              </Route>
              <Route path="/main3">
                <Main3 />
              </Route>
            </Switch>
        </Router>
      
      <Footer/>
      </React.StrictMode>,
      </div>
      );
    }
  }

  export default App1;

