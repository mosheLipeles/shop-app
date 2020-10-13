import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const {
      onIncrement,
      onDecrement,
      onReset,
      onDelete,
      onDeleteAll,
      counters,
    } = this.props;

    return (
      <div>
        <h1>Cart</h1>
        <div>
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Count</th>
                <th scope="col">
                  <button className="btn_delete" onClick={onDeleteAll}>
                    Delete all
                  </button>
                </th>
              </tr>
            </thead>
            <tbody>
              {counters.map((counter) => (
                <Counter
                  key={counter.id}
                  onIncrement={onIncrement}
                  onDecrement={onDecrement}
                  onDelete={onDelete}
                  onReset={onReset}
                  counter={counter}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Counters;
