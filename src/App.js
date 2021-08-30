import React from "react";
import "assets/scss/styles.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "pages/LandingPage";
import DetailsPage from "pages/DetailsPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage}></Route>
          <Route path="/details" component={DetailsPage}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
