import React from "react";

class FinalRequest extends React.Component {
  render() {
    const arr = [];
    let total;
    this.props.data
      .filter((ele) => ele.countRequest > 0)
      .map((e) => {
        arr.push(e.price * e.countRequest);
        total = arr.reduce(function (previous, current) {
          return previous + current;
        }, 0);
      });
    return (
      <React.Fragment>
        <h3>الطلبية ...</h3>
        <table>
          <thead>
            <tr>
              <td>الوجبة</td>
              <td>العدد</td>
              <td>السعر</td>
            </tr>
          </thead>
          <tbody>
            {this.props.data
              .filter((ele, index) => ele.countRequest > 0)
              .map((e, index) => {
                if (e.name) {
                  return (
                    <tr key={"req-" + e.id} >
                      <td>{e.name}</td>
                      <td>{e.countRequest}</td>
                      <td>
                        {e.price * e.countRequest}
                        {e.currency == "dollar"
                          ? " $"
                          : e.currency == "shekial"
                          ? " شيكل"
                          : " $"}
                      </td>
                    </tr>
                  );
                }
              })}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={3}>
                السعر الكلي:
                <b>{total > 0 ? total : "-"} $</b>
              </td>
            </tr>
          </tfoot>
        </table>
        <button>تأكيد الطلب</button>
      </React.Fragment>
    );
  }
}

export default FinalRequest;
