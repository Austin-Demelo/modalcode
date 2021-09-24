import React, {Component} from "react";
import logo from './logo.svg';
import './App.css';
import ModalClass from "./components/Modal";
import Button from "@material-ui/core/Button"

//NPM INSTALL 
//npm install react-bootstrap bootstrap
//npm install @material-ui/core


export class App extends Component {
  constructor(props){
    super(props);
    this.state={
      modalShow: false
    }
  }

  setModalShow = (x) => {
    this.setState({modalShow: x})
  }

  render(){
    return (
      <div >
        <Button variant="contained" color="primary" onClick={() => this.setModalShow(true)}>
          Launch modal
        </Button>

        <ModalClass
          show={this.state.modalShow}
          onHide={() => this.setModalShow(false)}
        />
      </div>
    );
  }
  
}

export default App;
