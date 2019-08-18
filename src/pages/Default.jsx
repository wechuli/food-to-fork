import React, { Component } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

export class Default extends Component {
  render() {
    return (
      <Header title="404" styleClass="default-hero">
        <h2 className="text-light">You are in the wrong place</h2>
        <Link exact="true" to="/" className="btn btn-secondary btn-lg mt-3">
          Return Home
        </Link>
      </Header>
    );
  }
}

export default Default;
