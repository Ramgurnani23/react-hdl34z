import React from "react";

class MyInfoTwo extends React.Component {
  render() {
    return (
      <div className = "myInfo">
        <h2>Hello Two</h2>
       <p> I am {this.props.name} </p>
        <p> I am {this.props.age} Year old </p>
      </div>
    );
  }
}

export default MyInfoTwo;
