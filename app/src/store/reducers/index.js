import * as ACTIONS from "../actions";

const initialState = {
  isLoading: false,
  joke: [],
  error: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.FETCH_JOKE_START:
      return { ...state, isLoading: true };

    default:
      return state;
  }
};
