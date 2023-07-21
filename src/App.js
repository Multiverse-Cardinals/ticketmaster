import React from "react";
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GetEvents from "./components/GetEvents";

function App() {
  return (
    <div>
      <Header />
      <GetEvents />
      <Footer />
    </div>
  );
}

export { App };
