import React, { Component } from "react";
import RecipeList from "../components/RecipeList";
import SearchRecipes from "../components/SearchRecipes";
import { recipeData } from "../data/tempList";

export class Recipes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: recipeData,
      searchValue: ""
    };
  }
  handleChange = e => {
    this.setState({
      searchValue: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    alert(this.state.searchValue);
    this.setState({ searchValue: "" });
  };
  render() {
    return (
      <>
        <SearchRecipes
          searchValue={this.state.searchValue}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <RecipeList recipes={this.state.recipes} />
      </>
    );
  }
}

export default Recipes;
