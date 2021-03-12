import React, { Component, Suspense } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/Routes";

class App extends Component {
  state = {
    adminPath: "/admin",
  };

  render() {
    return (
      <Router>
        <div className="CCPC__main">
          <Suspense fallback={<p>Loading...</p>}>
            <Routes />
          </Suspense>
        </div>
      </Router>
    );
  }
}

export default App;
