import React from "react";

class MovieItem extends React.Component {
  constructor() {
    super();

    this.state = {
      willWatch: false
    };
  }


  // componentWillUnmount (){
  //   console.log('unmount', this.props.data.title)
  // }

  render() {
    const {
      movie,
      removeMovie,
      addMovieToWillWatch,
      removeMovieFromWillWatch
    } = this.props;
    return (
      <div className="card">
        <img
          className="card__img-top"
          src={`https://image.tmdb.org/t/p/w500${
            movie.backdrop_path || movie.poster_path
          }`}
          alt=""
        />
        <div className="card__body">
          <h6 className="card__title">{movie.title}</h6>
          <div className="d-flex justify-content-between align-items-center">
            <p className="mb-0">Rating: {movie.vote_average}</p>

            {this.state.willWatch === true ? (
              <button
                type="button"
                className="btn btn-success"
                onClick={() => {
                  this.setState({
                    willWatch: false
                  });
                  removeMovieFromWillWatch(movie);
                }}
              >
                Remove Will Watch
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => {
                  this.setState({
                    willWatch: true
                  });

                  addMovieToWillWatch(movie);
                }}
              >
                Add Will Watch
              </button>
            )}
          </div>
          <button onClick={removeMovie.bind(null, movie)}> Delete movie</button>
        </div>
      </div>
    );
  }
}

// const MovieItem = (props) => {
//   console.log(props);
// };

export default MovieItem;
