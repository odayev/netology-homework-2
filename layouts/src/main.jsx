import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import App from "./App.jsx";

const products = [
  {
    id: 1,
    name: "Nike Metcon 1",
    price: "118",
    color: "red",
    img: "./img/1.jpg",
  },
  {
    id: 2,
    name: "Nike Metcon 2",
    price: "122",
    color: "green",
    img: "./img/2.jpg",
  },
  {
    id: 3,
    name: "Nike Metcon 3",
    price: "134",
    color: "blue",
    img: "./img/3.jpg",
  },
  {
    id: 4,
    name: "Nike Metcon 4",
    price: "140",
    color: "black",
    img: "./img/4.jpg",
  },
  {
    id: 5,
    name: "Nike free run",
    price: "170",
    color: "black",
    img: "./img/5.jpg",
  },
  {
    id: 6,
    name: "Nike Metcon 3",
    price: "150",
    color: "green",
    img: "./img/6.jpg",
  },
];

const cardsLayout = {
  xs: 12,
  sm: 8,
  md: 6,
  lg: 4,
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App products={products} layouts={cardsLayout} />
  </React.StrictMode>
);
