import { FIND_MOVIES } from "../Constants";

const initialValues = {
    cartMovies: [],
}

const movieReducer = (state = initialValues, action) => {
    switch (action.type) {
        case FIND_MOVIES:
            return {...state, cartMovies: [...state.cartMovies, action.payload]};
        default:
            return state;
    }
}

export default movieReducer;