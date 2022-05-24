import { FIND_MOVIES } from "../Constants";

export const actionSearchMovie = (movie) => ({
  type: FIND_MOVIES,
  payload: movie,
});
