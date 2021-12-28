import React from "react";
import BoxFood from "./boxFood";
import FinalRequest from "./requestMe";

class Content extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="listFood">
          {this.props.listFood.map((ele) => (
            <BoxFood
              key={ele.id}
              data={ele}
              onPlus={this.props.onPlus}
              onMinus={this.props.onMinus}
            />
          ))}
        </div>
        <div className="requestMe">
          <FinalRequest data={this.props.listFood} />
        </div>
      </div>
    );
  }
}

export default Content;
