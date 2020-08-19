import React, { useRef, useState } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Login from "./pages/Login";
import Confirmacao from "./pages/Confirmacao";
import Resetar from "./pages/Resetar";
import PainelLogin from "./painel/Login";
import PainelDashboard from "./painel/Dashboard";
import isAuthenticated from "./jwt";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/validar">
            <Confirmacao />
          </Route>
          <Route path="/resetar">
            <Resetar />
          </Route>
          <Route exact path="/painelseguro">
            <PainelLogin />
          </Route>
          <Route path="/painelseguro/dash">
            {isAuthenticated() ? (
              <PainelDashboard />
            ) : (
              <Redirect to="/painelseguro" />
            )}
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
