import React, { Component } from "react";
import Popup from "./popup";

class Product extends Component {
  state = {
    showPopup: false,
  };

  togglePopup = () => {
    this.setState({
      showPopup: !this.state.showPopup,
    });
  };

  render() {
    return (
      <React.Fragment>
        <tr>
          <td>{this.props.product.name}</td>
          <td>{this.props.product.price}₪</td>
          <td>
            <button onClick={this.togglePopup.bind()}>Details</button>
          </td>
          <td>
            <button
              disabled={this.props.product.selected}
              onClick={() => this.props.onAddToCart(this.props.product)}
            >
              Add to cart
            </button>
          </td>
        </tr>
        {this.state.showPopup ? (
          <Popup
            details={this.props.product.details}
            closePopup={this.togglePopup.bind(this)}
          />
        ) : null}
      </React.Fragment>
    );
  }
}

export default Product;
