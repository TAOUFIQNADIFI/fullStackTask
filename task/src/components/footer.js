import React  from 'react';
import ReactDOM from 'react-dom';
import './footer.css';
import PopUp from './PopUp.js'


class Footer extends React.Component {
    constructor() {
        super();
        this.state = {
          showPopup: false
        };
      }
      togglePopup() {
        this.setState({
          showPopup: !this.state.showPopup
        });
      }


  
  render() {
    

    return(

  

        //<!-- Footer -->
        <div className="row">
        <div className="footer" onClick={this.togglePop}>
            <div className="foot" >

  <h4>RULES</h4> 
  
  </div>
</div>
{this.state.seen ? <PopUp toggle={this.togglePop} /> : null}
</div>
      
);
  }
}

export default Footer;