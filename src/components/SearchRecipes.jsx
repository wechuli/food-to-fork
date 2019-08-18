import React, { Component } from "react";

const SearchRecipes = props => {
  const { handleChange, handleSubmit, searchValue } = props;
  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto col-md-8 mt-5 text-center">
          <h1 className="text-slanted">
            Search Recipes With{" "}
            <strong className="text-orange"> Food2Fork</strong>
          </h1>
          <form className="mt-4" onSubmit={handleSubmit}>
            <label htmlFor="search"> Type Recipes Separated by Commas</label>
            <div className="input-group">
              <input
                type="text"
                name="search"
                placeholder="chicken,onion,carrots"
                className="form-control"
                value={searchValue}
                onChange={handleChange}
      
              />
              <div className="input-group-append">
                <button className="input-group-text bg-primary">
                  <i className="fas fa-search" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchRecipes;
