import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Default from "./pages/Default";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import SingleRecipe from "./pages/SingleRecipe";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
    
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/recipes" component={Recipes} />
        <Route exact path="/recipes/:recipeId" component={SingleRecipe} />
        {/* Below is the default route if all others are not matched */}
        <Route component={Default} />
      </Switch>
    </>
  );
}

export default App;
