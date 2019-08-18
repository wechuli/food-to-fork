import React, { Component } from "react";
import axios from "axios";
import RecipeList from "../components/RecipeList";
import SearchRecipes from "../components/SearchRecipes";
import { recipeData } from "../data/tempList";

export class Recipes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      loading:true,
      searchValue: "",
      url: `https://www.food2fork.com/api/search?key=${
        process.env.REACT_APP_API_KEY
      }`,
      base_url: `https://www.food2fork.com/api/search?key=${
        process.env.REACT_APP_API_KEY
      }`,
      query: "&q=",
      error: ""
    };
    this.getRecipes = this.getRecipes.bind(this);
  }
  async getRecipes() {
    try {
      const response = await axios.get(this.state.url);
      if (response.data.count === 0) {
        this.setState({
          error:
            "Sorry but your search did not return any recipes, please try again or press search icon for the most popular recipes"
        });
      } else {
        this.setState({ recipes: response.data["recipes"], error: "" });
      }
    } catch (error) {
      console.log(error);
    }
  }
  componentDidMount() {
    this.getRecipes();
  }

  handleChange = e => {
    this.setState({
      searchValue: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const { base_url, query, searchValue } = this.state;
    this.setState(
      { url: `${base_url}${query}${searchValue}`, searchValue: "" },
      () => {
        this.getRecipes();
      }
    );
  };
  render() {
    return (
      <>
        <SearchRecipes
          searchValue={this.state.searchValue}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        {this.state.error ? (
          <section>
            <div className="row">
              <div className="col">
                <h2 className="text-orange text-center text-uppercase mt-5">
                  {this.state.error}
                </h2>
              </div>
            </div>
          </section>
        ) : (
          <RecipeList recipes={this.state.recipes} />
        )}
      </>
    );
  }
}

export default Recipes;
