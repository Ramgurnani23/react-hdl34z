import React from "react";
import "./style.css";
import MyInfoOne from './Components/MyInfoOne.js';
import MyInfoTwo from './Components/MyInfoTwo.js';

import OtherOne from './Components/SubComponent/subComponentOne.js';
import OtherTwo from './Components/SubComponent/subComponentTwo.js';

class App extends React.Component {

  state = {
    name: "Ram Bhai",
    age: 23,
    count :0,
  };

  addNumber = () => {
    this.setState({
      count: this.state.count+1
    }) 
  }

  minNumber = () => {
    this.setState({
      count: this.state.count-1
    })
  }

  render() {
    return(
      <div>
        <MyInfoOne increment = {this.addNumber} name= {this.state.name} age = {this.state.age} 
        count = {this.state.count} decrement = {this.minNumber}/>
      <MyInfoTwo increment = {this.addNumber} name= {this.state.name} age = {this.state.age} 
      count = {this.state.count} decrement = {this.minNumber}/>

      <OtherOne/>
      <OtherTwo />
      </div>
    )
  }
}

export default App;
