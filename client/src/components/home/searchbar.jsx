import React from "react";
import { useDispatch } from "react-redux";
import { searchRecipe } from "../../redux/actions/actions";

export default function SearchBar() {
  const [input, setInput] = React.useState("");

  const dispatch = useDispatch();

  let handleChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
    //importar debounce
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchRecipe(input));
    setInput("");
  };

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label for="name">Busqueda: </label>
        <input
          type="text"
          id="name"
          placeholder="receta"
          name="name"
          value={input}
          onChange={(e) => handleChange(e)}
        />

        <button type="submit">Buscar</button>
      </form>
    </>
  );
}
