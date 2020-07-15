import * as ACTIONS from "../actions";

const initialState = {
  isLoading: false,
  joke: {},
  error: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.FETCH_JOKE_START:
      return { ...state, isLoading: true };
    case ACTIONS.FETCH_JOKE_SUCESS:
      return {
        ...state,
        isLoading: false,
        joke: action.payload,
        error: "",
      };
    case ACTIONS.FETCH_JOKE_FAILURE:
      return {
        ...state,
        isLoading: false,
        joke: {},
        error: action.payload,
      };
    default:
      return state;
  }
};
