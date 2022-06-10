import { Route } from "react-router-dom";
import Landing from "./components/landing/landing.jsx";
import Nav from "./components/nav/nav.jsx";
import Home from "./components/home/home.jsx";

import EstilosGlobales from "./EstilosGlobales";

function App() {
  return (
    <>
      <EstilosGlobales />

      <Route exact path={"/"} render={() => <Landing />} />
      <Route path={"/home"} render={() => <Nav />} />
      <Route path={"/home"} render={() => <Home />} />
    </>
  );
}

export default App;
