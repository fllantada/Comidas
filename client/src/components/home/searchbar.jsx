import React from "react";
import{setState} from React;
function SearchBar() {
    const[search,setSearch]=setState("")
  return (
    <form>
        busqueda
      <input type='text' />
      <input type='submit' value='Buscar' />
    </form>
  );
}

export default SearchBar;
