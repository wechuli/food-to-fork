import React, { Component } from "react";
import { recipeData } from "../data/tempDetails";
import { Link } from "react-router-dom";
import axios from "axios";

class SingleRecipe extends Component {
  constructor(props) {
    super(props);
    const { recipeId } = this.props.match.params;
    this.state = {
      recipe: {},
      recipeId,
      loading: true
    };
  }
  async componentDidMount() {
    try {
      const response = await axios.get(
        `https://www.food2fork.com/api/get?key=${
          process.env.REACT_APP_API_KEY
        }=${this.state.recipeId}`
      );
      this.setState({ recipe: response.data["recipe"], loading: false });
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    const {
      image_url,
      publisher,
      publisher_url,
      source_url,
      title,
      ingredients
    } = this.state.recipe;
    //console.log(image_url);

    if (this.state.loading) {
      return (
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-6 my-3">
              <h2 className="text-orange text-center">Loading Recipe...</h2>
              <div className="fa-7x text-center">
                <i className="fas fa-spinner fa-spin" />
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="container my-5">
          <div className="row">
            <div className="col-10 mx-auto col-md-6 my-3">
              <Link to="/recipes" className="btn btn-warning mb-5">
                Back to Recipe List
              </Link>
              <img
                src={image_url}
                className="d-block w-100"
                style={{ maxHeight: "30rem" }}
                alt="recipe"
              />
            </div>
            {/* Info */}
            <div className="col-10 mx-auto col-md-6 my-3">
              <h6>{title}</h6>
              <h6 className="text-warning text-slanted">
                Provided by {publisher}
              </h6>
              <a
                href={publisher_url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary mt-2"
              >
                Publisher Webpage
              </a>

              <a
                href={source_url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary mt-2 mx-2"
              >
                Recipe Url
              </a>
              <ul className="list-group mt-4">
                <h2 className="mt-3 mb-4">Ingredients</h2>
                {ingredients.map((item, index) => {
                  return (
                    <li key={index} className="list-group-item text-slanted">
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default SingleRecipe;
