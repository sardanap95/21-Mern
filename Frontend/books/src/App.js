import React, { Component } from "react";
import { Provider } from "react-redux";
import { HashRouter as Router, Route } from "react-router-dom";
import store from "./store/store";
import Landing from "./components/landing";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Navbar />
            <Route exact path="/" component={Landing} />
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
