import React, { Component } from "react";
import Header from "../../components/Header";

class Layout extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "#6f42c1" }}>
        <Header></Header>
        {this.props.children}
        <h1>Footer</h1>
      </div>
    );
  }
}
export default Layout;
