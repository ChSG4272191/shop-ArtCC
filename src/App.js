import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import "./style/global.css";
import Home from "./pages/Home";
import CreateAccount from "./pages/CreateAccount";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import PasswordRecovery from "./pages/PasswordRecovery";
import SendEmail from "./pages/SendEmail";
import NewPassword from "./pages/NewPassword";
import MyAccount from "./pages/MyAccount";
import Checkout from "./pages/Checkout";
import Orders from "./pages/Orders";
import Layout from "./containers/Layout";

const App = () => {
  return (
    // <Header/>
    <Layout>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/password-recovery" element={<PasswordRecovery />} />
        <Route exact path="/send-email" element={<SendEmail />} />
        <Route exact path="/new-password" element={<NewPassword />} />
        <Route exact path="/account" element={<MyAccount />} />
        <Route exact path="/signup" element={<CreateAccount />} />
        <Route exact path="/checkout" element={<Checkout />} />
        <Route exact path="/orders" element={<Orders />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
};

export default App;
