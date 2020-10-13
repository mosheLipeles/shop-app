import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.counter.name}</td>
        <td>{this.props.counter.price}</td>
        <td>{this.props.counter.value}</td>
        <td>
          <button onClick={() => this.props.onIncrement(this.props.counter)}>
            +
          </button>
          <button
            onClick={() => this.props.onDecrement(this.props.counter)}
            style={{ borderLeftWidth: 3, borderRightWidth: 3 }}
          >
            -
          </button>
          {/* <button onClick={() => this.props.onReset(this.props.counter)}>
            Reset
          </button> */}
          <button onClick={() => this.props.onDelete(this.props.counter.id)}>
            Delete
          </button>
        </td>
      </tr>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-3 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
