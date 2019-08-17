import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

class Home extends Component {
  render() {
    return (
      <>
        <Header title="Amazing Recipes">
          <Link exact to="recipes" className="btn btn-secondary btn-lg mt-3 ">
            Search Recipes
          </Link>
        </Header>
      </>
    );
  }
}

export default Home;
