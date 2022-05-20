import React, { useState } from "react";
import "./SearchBox.css";
import {actionSearchMovie} from "../../Redux-manager/Movies/Actions"
import {useDispatch} from "react-redux"

function SearchBox() {
  const [searchLine, setSearchLine] = useState("");

  const searchLineChangeHandler = (e) => {
    setSearchLine(e.target.value);
  };
  
  const dispatch=useDispatch()

  const searchBoxSubmitHandler = (e) => {
    e.preventDefault();
  };

  const searchLineMovies = () =>{
    dispatch(actionSearchMovie(setSearchLine));
};

  return (
    <div className="search-box">
      <form className="search-box__form" onSubmit={searchBoxSubmitHandler}>
        <label className="search-box__form-label">
          Искать фильм по названию:
          <input
            value={searchLine}
            type="text"
            className="search-box__form-input"
            placeholder="Например, Shawshank Redemption"
            onChange={searchLineChangeHandler}
          />
        </label>
        <button
          type="submit"
          className="search-box__form-submit"
          disabled={!searchLine}
          onClick={searchLineMovies}
        >
          Искать
        </button>
      </form>
    </div>
  );
}

export default SearchBox;
