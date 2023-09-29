import "./App.css";
import React from "react";
import Card from "./components/Card";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
