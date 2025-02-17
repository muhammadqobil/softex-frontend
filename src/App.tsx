import {BrowserRouter} from "react-router-dom";
import './App.scss';
import {useState} from "react";
import {Login} from "./pages/login";
import {RoutesComponent} from "./routes";

function App() {
    const isAuth = JSON.parse(localStorage.getItem("isAuth") || "false") as boolean;
    console.log(isAuth)
  return (
      isAuth ?
          <BrowserRouter>
            <RoutesComponent/>
          </BrowserRouter> : <Login/>
  );
}

export default App;
