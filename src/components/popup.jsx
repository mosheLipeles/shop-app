import React, { Component } from "react";
import Detail from "./detail";

class Popup extends Component {
  showDetails = () => {
    this.props.details.forEach((element) => {
      return <h3 style={{ marginLeft: 80 }}>{element}</h3>;
    });
  };
  render() {
    const { details } = this.props;
    return (
      <div className="popup">
        <div style={{ height: 200, width: 200 }} className="popup_inner">
          {details.map((detail) => (
            <Detail key={detail} detail={detail} />
          ))}
          <button
            style={{ marginLeft: 70, marginTop: 20 }}
            onClick={this.props.closePopup}
          >
            close
          </button>
        </div>
      </div>
    );
  }
}

export default Popup;
