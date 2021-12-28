// import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/nav";
import Content from "./components/content";
import React from "react";

class App extends React.Component {
  state = {
    foods: [
      {
        id: 1,
        name: "بيبسي",
        price: "1",
        currency: "dollar",
        img: "https://www.soraikhana.com.bd/wp-content/uploads/2021/02/1-136.jpg",
        countRequest: "0",
      },
      {
        id: 2,
        name: "بطاطا",
        price: "3",
        currency: "dollar",
        img: "https://shamlola.s3.amazonaws.com/Shamlola_Images/5/src/b0071d14f12dc6393cda315400817bfcb7d0a306.jpg",
        countRequest: "0",
      },
      {
        id: 3,
        name: "كيك",
        price: "2",
        currency: "dollar",
        img: "https://mafahem.com/uploads/article_thumb/d_lg/2019/8/%D8%A3%D8%B3%D9%87%D9%84-%D9%88%D8%A3%D8%B3%D8%B1%D8%B9-%D8%B7%D8%B1%D9%8A%D9%82%D8%A9-%D8%B9%D9%85%D9%84-%D8%A7%D9%84%D8%AA%D9%8A%D8%B1%D8%A7%D9%85%D9%8A%D8%B3%D9%88.jpg",
        countRequest: "0",
      },
      {
        id: 4,
        name: "فرشوحة شاورما",
        price: "10",
        currency: "dollar",
        img: "https://d3bmfjzp9v44wi.cloudfront.net/thumbs/fit630x300/159715/1494709166/%D8%B7%D8%B1%D9%8A%D9%82%D8%A9_%D8%B9%D9%85%D9%84_%D8%B4%D8%A7%D9%88%D8%B1%D9%85%D8%A7_%D8%B5%D8%A7%D8%AC.jpg",
        countRequest: "0",
      },
      {
        id: 5,
        name: "دجاج مشوي",
        price: "20",
        currency: "mainCurrency",
        img: "https://kitchen.sayidaty.net/uploads/small/13/132659a54db998ff1d9d141fd47eced6_w750_h750.jpg",
        countRequest: "0",
      },
      {
        id: 6,
        name: "سمك مقلي",
        price: "17",
        currency: "dollar",
        img: "https://www.supermama.me/system/App/Entities/Recipe/images/000/108/732/watermarked/%D8%B3%D9%85%D9%83-%D8%B4%D8%B9%D8%B1%D9%8A-%D9%85%D9%82%D9%84%D9%8A.jpg",
        countRequest: "0",
      },
      {
        id: 7,
        name: "وجبة شاورما",
        price: "16",
        currency: "dollar",
        img: "https://modo3.com/thumbs/fit630x300/97618/1531832280/%D8%B7%D8%B1%D9%8A%D9%82%D8%A9_%D8%B9%D9%85%D9%84_%D8%A7%D9%84%D8%B4%D8%A7%D9%88%D8%B1%D9%85%D8%A7_%D8%A7%D9%84%D8%AA%D8%B1%D9%83%D9%8A%D8%A9.jpg",
        countRequest: "0",
      },
    ],
  };

  minus = (data) => {
    const clone = [...this.state.foods];
    const index = clone.indexOf(data);
    clone[index] = { ...clone[index] };
    if (clone[index].countRequest > 0) {
      clone[index].countRequest--;
    }
    const foods = clone;
    this.setState({ foods });
  };

  plus = (data) => {
    const clone = [...this.state.foods];
    const index = clone.indexOf(data);
    clone[index] = { ...clone[index] };
    clone[index].countRequest++;
    const foods = clone;
    this.setState({ foods });
  };

  render() {
    return (
      <React.Fragment>
        <Nav />
        <Content
          onPlus={this.plus}
          onMinus={this.minus}
          listFood={this.state.foods}
        />
      </React.Fragment>
    );
  }
}

export default App;
