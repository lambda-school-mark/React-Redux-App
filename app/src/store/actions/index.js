import axios from "axios";

export const FETCH_JOKE_START = "FETCH_JOKE_START";
export const FETCH_JOKE_SUCESS = "FETCH_JOKE_SUCESS";
export const FETCH_JOKE_FAILURE = "FETCH_JOKE_FAILURE";

export const fetchJoke = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_JOKE_START });
    axios
      .get("https://official-joke-api.appspot.com/random_joke")
      .then((res) => {
        dispatch({ type: FETCH_JOKE_SUCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: FETCH_JOKE_FAILURE, payload: err.message });
      });
  };
};
