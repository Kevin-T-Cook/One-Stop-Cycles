import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom/client";
import {Provider} from "react-redux";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import store from "./store";
// import "./index.css";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import BikesPage from "./pages/BikesPage";
import Reparis from "./pages/Repairs";
import AccessoriesPage from "./pages/AccessoriesPage";
import ContactPage from "./pages/Contact";
import PartsPage from "./pages/PartsPage";
import CartPage from "./pages/CartPage";


const Main = () => {

    return (
        <React.StrictMode>
            <BrowserRouter>
                <Nav />
                <Provider store={store}>
                    <Routes>
                        <Route path={"/"} element={<Home />} />
                        <Route path={"/bikes"} element={<BikesPage />} />
                        <Route path={"/repairs"} element={<Reparis />} />
                        <Route path={"/parts"} element={<PartsPage />} />
                        <Route path={"/accessories"} element={<AccessoriesPage />} />
                        <Route path={"/contact"} element={<ContactPage />} />
                        <Route path={"/cart"} element={<CartPage />} />
                    </Routes>
                </Provider>
            </BrowserRouter>
        </React.StrictMode>
    );
};

ReactDOM.createRoot(document.getElementById("root")).render(<Main />);