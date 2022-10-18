import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import NotFound from "./NotFound";

const Main = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route element={<NotFound />}></Route>
      </Routes>
    </div>
  );
};

export default Main;
