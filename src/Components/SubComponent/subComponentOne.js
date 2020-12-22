import React from "react";

class OtherOne extends React.Component {
  render() {
    return (
      <div className = "myInfo">
        <h2>Hello subComponent One</h2>
        <p> I am {this.props.name} </p>
        <p> I am {this.props.age} Year old </p>
        <p> {this.props.count} </p>
        <button onClick = {this.props.increment}> Increment</button>
        <br/> <br/>
        <button onClick = {this.props.decrement}> Decrement</button>
      </div>
    );
  }
}

export default OtherOne;
