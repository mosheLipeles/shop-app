import React, { Component } from "react";
import "./App.css";
import Products from "./components/products";
import Counters from "./components/counters";
import NavBar from "./components/navbar";

class App extends Component {
  state = {
    products: [
      {
        id: 1,
        name: "LG SK8500",
        price: 6000,
        details: [
          "category: TV",
          "size: 65 inch",
          "tech: AI thinq",
          "display: nano-cell",
          "sound: 40W",
        ],
        selected: false,
      },
      {
        id: 2,
        name: "SUMSUNG KO7000",
        price: 6200,
        details: [
          "category: TV",
          "size: 75 inch",
          "tech: AI thinq",
          "display: oled",
          "sound: 30W",
        ],
        selected: false,
      },
      {
        id: 3,
        name: "SONY AU6300",
        price: 7150,
        details: [
          "category: TV",
          "size: 55 inch",
          "tech: AI thinq",
          "display: nano-cell",
          "sound: 40W",
        ],
        selected: false,
      },
      {
        id: 4,
        name: "PHILIPS WU9200",
        price: 4999,
        details: [
          "category: TV",
          "size: 80 inch",
          "tech: AI thinq",
          "display: 4k",
          "sound: 20W",
        ],
        selected: false,
      },
      {
        id: 5,
        name: "LG SL10Y",
        price: 850,
        details: ["category: Sound Bar", "sound: 80W"],
        selected: false,
      },
      {
        id: 6,
        name: "SONY B11K",
        price: 200,
        details: ["category: DVD", "input: AUX , USB"],
        selected: false,
      },
    ],

    counters: [],

    totalProducts: [0],

    totalPrice: [0],

    showPopup: false,
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    const totalProducts = [...this.state.totalProducts];
    totalProducts[0] = totalProducts[0] + 1;
    const totalPrice = [...this.state.totalPrice];
    totalPrice[0] = totalPrice[0] + counter.price;
    this.setState({ counters, totalProducts, totalPrice });
  };

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    if (counters[index].value > 1) {
      counters[index].value--;
      const totalProducts = [...this.state.totalProducts];
      totalProducts[0] = totalProducts[0] - 1;
      const totalPrice = [...this.state.totalPrice];
      totalPrice[0] = totalPrice[0] - counter.price;
      this.setState({ counters, totalProducts, totalPrice });
    }
  };

  handleReset = (counter) => {
    const totalProducts = [...this.state.totalProducts];
    totalProducts[0] = totalProducts[0] - counter.value;
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value = 0;
    this.setState({ counters, totalProducts });
  };

  handleDelete = (counterID) => {
    const counter = this.state.counters.filter((c) => c.id === counterID);
    const totalProducts = [...this.state.totalProducts];
    totalProducts[0] = totalProducts[0] - counter[0].value;
    const totalPrice = [...this.state.totalPrice];
    totalPrice[0] = totalPrice[0] - counter[0].price * counter[0].value;
    const counters = this.state.counters.filter((c) => c.id !== counterID);
    const product = this.state.products.filter((c) => c.id === counterID);
    const products = [...this.state.products];
    const index = products.indexOf(product[0]);
    products[index].selected = false;
    this.setState({ products, counters, totalProducts, totalPrice });
  };

  handleDeleteAll = () => {
    const counters = this.state.counters.filter((c) => c.id === 0);
    const totalProducts = [...this.state.totalProducts];
    totalProducts[0] = 0;
    const totalPrice = [...this.state.totalPrice];
    totalPrice[0] = 0;
    const products = [...this.state.products];
    products.map((c) => (c.selected = false));
    this.setState({ counters, totalProducts, products, totalPrice });
  };

  handleAddToCart = (product) => {
    const products = [...this.state.products];
    const counters = [...this.state.counters];
    counters.push({
      id: product.id,
      name: product.name,
      price: product.price,
      value: 1,
    });
    const index = products.indexOf(product);
    products[index] = { ...product };
    products[index].selected = true;
    const totalProducts = [...this.state.totalProducts];
    totalProducts[0] = totalProducts[0] + 1;
    const totalPrice = [...this.state.totalPrice];
    totalPrice[0] = totalPrice[0] + product.price;
    this.setState({ products, counters, totalProducts, totalPrice });
  };

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md">
            <Products
              products={this.state.products}
              onAddToCart={this.handleAddToCart}
            />
          </div>
          <div className="col-md">
            <Counters
              counters={this.state.counters}
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}
              onReset={this.handleReset}
              onDelete={this.handleDelete}
              onDeleteAll={this.handleDeleteAll}
            />
          </div>
        </div>
        <NavBar
          totalProducts={this.state.totalProducts[0]}
          totalPrice={this.state.totalPrice[0]}
        />
      </div>
    );
  }
}

export default App;
