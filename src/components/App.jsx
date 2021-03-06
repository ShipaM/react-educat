import React from "react";
// import { moviesData } from "../moviesData";
import MovieItem from "./MovieItem";
import { API_URL, API_KEY_3 } from "../utils/api";
import MovieTabs from "./MovieTabs";

//UI = fn(state,props)
//onsole.log(moviesData);

// function removeMovie(movie) {
//   const updateMovies = this.state.movies.filter(function(item){
//     return item.id !== movie.id;
//   });
//   console.log(updateMovies);

//   // this.state.movies=updateMovies;
//   this.setState({
//     movies: updateMovies
//   });
// }

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      moviesWillWatch: [],
      sort_by: "revenue.desc"
    };
  }

  componentDidMount() {
    console.log("didMount");
    // fetch(
    //   `${API_URL}/discover/movie?api_key=${API_KEY_3}&sort_by=${this.state.sort_by}`
    // )
    //   .then((response) => {
    //     console.log("then");
    //     return response.json();
    //   })
    //   .then((data) => {
    //     console.log("data", data);
    //     this.setState({
    //       movies: data.results
    //     });
    //   });

    this.getMovies()
  }

  componentDidUpdate(prevProps, prevState){
    console.log('didUpdate');
    console.log('prev', prevProps, prevState);
    console.log('this', this.props, this.state);
    if (prevState.sort_by !== this.state.sort_by){
      console.log('call api');
      this.getMovies()

    }
  }

  getMovies =()=>{
    fetch(
      `${API_URL}/discover/movie?api_key=${API_KEY_3}&sort_by=${this.state.sort_by}`
    )
      .then((response) => {
        console.log("then");
        return response.json();
      })
      .then((data) => {
        console.log("data", data);
        this.setState({
          movies: data.results
        });
      });
  }

  removeMovie = (movie) => {
    const updateMovies = this.state.movies.filter(function (item) {
      return item.id !== movie.id;
    });
    console.log(updateMovies);

    // this.state.movies=updateMovies;
    this.setState({
      movies: updateMovies
    });
  };

  addMovieToWillWatch = (movie) => {
    console.log(movie);
    const updateMovies = [...this.state.moviesWillWatch, movie];

    // const updateMovies = [...this.state.moviesWillWatch];
    // updateMovies.push(movie);

    console.log(updateMovies);

    this.setState({ moviesWillWatch: updateMovies });
  };

  removeMovieFromWillWatch = (movie) => {
    const updateMoviesWillWatch = this.state.moviesWillWatch.filter(function (
      item
    ) {
      return item.id !== movie.id;
    });
    console.log(updateMoviesWillWatch);

    this.setState({
      moviesWillWatch: updateMoviesWillWatch
    });
  };

  updateSortBy = (value) => {
    this.setState({
      sort_by: value
    });
  };

  render() {
    console.log("render", this.state.sort_by);
    return (
      <div className="container">
        <div className="row mt-4">
          <div className="col-9">
            <div className="row">
              <div className="col-12 mb-4">
                <MovieTabs
                  sort_by={this.state.sort_by}
                  updateSortBy={this.updateSortBy}
                />
              </div>
            </div>
            <div className="row">
              {this.state.movies.map((movie) => {
                return (
                  <div className="col-6 mb-4" key={movie.id}>
                    <MovieItem
                      movie={movie}
                      removeMovie={this.removeMovie}
                      addMovieToWillWatch={this.addMovieToWillWatch}
                      removeMovieFromWillWatch={this.removeMovieFromWillWatch}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          <div className="col-3">
            <p>Will watch {this.state.moviesWillWatch.length}</p>
          </div>
        </div>
      </div>
    );
  }
}
// function App() {
//   return <div>{moviesData[0].title}</div>;
// }

export default App;
