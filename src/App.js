import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";

function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>This is the heading that has to be made to a allowing a full put </h1>
      </header>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);
