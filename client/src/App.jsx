import { Route } from "react-router-dom";
import Landing from "./components/landing/landing.jsx";
import Nav from "./components/nav/nav.jsx";
import Home from "./components/home/home.jsx";
import RecipeDetails from "./components/recipeDetails/recipeDetails.jsx";

import EstilosGlobales from "./EstilosGlobales.jsx";
import Create from "./components/CreateForm/Create.jsx";

function App() {
  return (
    <>
      <EstilosGlobales />

      <Route exact path={"/"} render={() => <Landing />} />
      <Route path={"/home"} render={() => <Nav />} />
      <Route exact path={"/home"} render={() => <Home />} />
      <Route exact path={"/home/create"} render={() => <Create />} />
      <Route exact path={"/home/detail/:id"} render={() => <RecipeDetails />} />
    </>
  );
}

export default App;
