import React, { Component } from "react";
import { Provider } from "react-redux";
import { HashRouter as Router, Route } from "react-router-dom";
import store from "./store/store";
import Landing from "./components/landing";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import SavedBooks from "./components/savedBooks";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ToastContainer />
        <Router>
          <div>
            <Navbar />
            <Route exact path="/" component={Landing} />
            <Route exact path="/saved-books" component={SavedBooks} />
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
