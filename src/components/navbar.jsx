import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-dark">
        <a className="navbar-brand" href="#">
          <h1 style={{ color: "white" }}>Summary </h1>
          <span className="badge badge-pill badge-secondary m-2">
            Total products: {this.props.totalProducts}
          </span>
          <span
            style={{ marginLeft: 15 }}
            className="badge badge-pill badge-secondary"
          >
            Total price: {this.props.totalPrice}
          </span>
        </a>
      </nav>
    );
  }
}

export default NavBar;
