import React, { useState } from "react";
import "./Favorites.css";

function Favorites() {
  const [title, SetTitle] = useState("");
  const [movies, SetMovies] = useState([
    { imdbID: "tt0068646", title: "The Godfather", year: 1972 },
  ]);

  const ChangeText = (e) =>{
    SetTitle(e.target.value)
  }

  return (
    <div className="favorites">
      <input value={title} onChange={ChangeText} placeholder="Новый список" className="favorites__name" />
      <ul className="favorites__list">
        {movies.map((item) => {
          return (
            <li key={item.id}>
              {item.title} ({item.year})
            </li>
          );
        })}
      </ul>
      <button type="button" className="favorites__save">
        Сохранить список
      </button>
    </div>
  );
}

export default Favorites;
