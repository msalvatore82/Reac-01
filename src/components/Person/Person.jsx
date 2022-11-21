import React, { Component } from "react";
import"./Person.css"


export class Person extends Component {
  render() { 
    return (
        <span>
          {this.props.name}, {this.props.surname}, {this.props.age}, <br />
        </span>
    );
  }
}

export default Person;

