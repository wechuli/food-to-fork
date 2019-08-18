import React, { Component } from "react";

class Recipe extends Component {
  render() {
    const {
      title,
      image_url,
      source_url,
      publisher,
      recipe_id
    } = this.props.recipe;
    return (
      <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
        <div className="card" style={{ height: "100%" }}>
          <img
            src={image_url}
            style={{ height: "14rem" }}
            className="img-card-top"
            alt=""
          />
        </div>
      </div>
    );
  }
}

export default Recipe;
