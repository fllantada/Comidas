import { Route } from "react-router-dom";
import Landing from "./components/landing/landing.jsx";
import Nav from "./components/nav/nav.jsx";
import Home from "./components/home/home.jsx";

import EstilosGlobales from "./EstilosGlobales";
import Create from "./components/CreateForm/Create";

function App() {
  return (
    <>
      <EstilosGlobales />

      <Route exact path={"/"} render={() => <Landing />} />
      <Route path={"/home"} render={() => <Nav />} />
      <Route exact path={"/home"} render={() => <Home />} />
      <Route exact path={"/home/Create"} render={() => <Create />} />
    </>
  );
}

export default App;
