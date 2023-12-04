import React from "react";
import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Userlisting from "./component/Userlisting";
import Userdetail from "./component/Userdetail";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import Store from "./redux/Store";

const App = () => {
  return (
    <Provider store={Store}>
      <div className="App">
        <BrowserRouter>
          <div className="header">
            <Link to={"/"}>Home</Link>
            <Link to={"/user"}>User</Link>
          </div>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/user" element={<Userlisting />}></Route>
            <Route path="/user/detail/:code" element={<Userdetail />}></Route>
          </Routes>
        </BrowserRouter>
        <ToastContainer></ToastContainer>
      </div>
    </Provider>
  );
};

export default App;
