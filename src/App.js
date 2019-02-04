import React, { Component } from "react";
// import logo from "./logo.svg";
import PartOfTheBodyContainer from "./Container/PartOfTheBodyContainer";
import "./App.css";
// import SideBar from "./Form/Sidebar";

class App extends Component {
  render() {
    return (
      <div>
        <h1>My App.js</h1>
        <PartOfTheBodyContainer />
      </div>
    );
  }
}

export default App;
