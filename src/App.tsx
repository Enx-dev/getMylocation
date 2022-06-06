import React, { useState } from "react";
import ReactDOM from "react-dom";
import Header from "./components/header/Header";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import Map from "./components/map/Map";
import "./index.scss";
import { LocationAPI } from "./Api";
import App2 from "../App2.0";

const App = () => 
  (
     <div className="">
       <ApiProvider api={LocationAPI}>
        <App2/> 
       </ApiProvider>
    
  </div>

  );ReactDOM.render(<App />, document.getElementById("app"));




