import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { fetchJoke } from "../store/actions";

const Joke = (props) => {
  const [shuffle, setShuffle] = useState(false);

  const shuffleJokes = () => {
    setShuffle(!shuffle);
  };
  useEffect(() => {
    props.fetchJoke();
  }, [shuffle]);
  return (
    <div className="jokeContainer">
      {props.isLoading && <p>causally testing your patience</p>}
      {props.joke && (
        <div className="jokeDisplay">
          <h4>{props.joke.setup}</h4>
          <p>{props.joke.punchline}</p>
        </div>
      )}
      {props.error && <p>{props.error.message}</p>}

      <button onClick={() => shuffleJokes()}>Shuffle</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    joke: state.joke,
    error: state.error,
  };
};

export default connect(mapStateToProps, { fetchJoke })(Joke);
