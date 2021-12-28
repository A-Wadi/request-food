import React from "react";

class BoxFood extends React.Component {
  render() {
    const {data} = this.props;
    return (
      <div className="box">
        <div>
          <img
            src={data.img}
            width={128}
            height={128}
            alt=""
          />
          <div>
            <p className="nameFood">{data.name}</p>
            <span className="priceFood">
              السعر:
              <b>
                {data.price}
                {data.currency == "dollar" ? " $" : data.currency == "shekial" ? " شيكل" : " $"}
              </b>
            </span>
            <div className="request">
              <div>
                <span className={"minus " + (data.countRequest == 0 ? "not-allowed" : "")} onClick={()=>this.props.onMinus(data)} >-</span>
                <span className="num">{data.countRequest}</span>
                <span onClick={()=>this.props.onPlus(data)} className="plus">+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BoxFood;
