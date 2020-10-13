import React, { Component } from "react";
import Product from "./product";

class Products extends Component {
  render() {
    const { onAddToCart, products } = this.props;
    return (
      <div>
        <h1>Stock</h1>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Details</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <Product
                key={product.id}
                onAddToCart={onAddToCart}
                product={product}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Products;
