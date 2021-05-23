(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),c=a(7),l=a.n(c),s=a(8),i=a(1),r=a(2),m=a(4),v=a(3),u=a(5),d=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(m.a)(this,Object(v.a)(t).call(this))).state={willWatch:!1},e}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.movie,o=t.removeMovie,c=t.addMovieToWillWatch,l=t.removeMovieFromWillWatch;return n.a.createElement("div",{className:"card"},n.a.createElement("img",{className:"card__img-top",src:"https://image.tmdb.org/t/p/w500".concat(a.backdrop_path||a.poster_path),alt:""}),n.a.createElement("div",{className:"card__body"},n.a.createElement("h6",{className:"card__title"},a.title),n.a.createElement("div",{className:"d-flex justify-content-between align-items-center"},n.a.createElement("p",{className:"mb-0"},"Rating: ",a.vote_average),!0===this.state.willWatch?n.a.createElement("button",{type:"button",className:"btn btn-success",onClick:function(){e.setState({willWatch:!1}),l(a)}},"Remove Will Watch"):n.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:function(){e.setState({willWatch:!0}),c(a)}},"Add Will Watch")),n.a.createElement("button",{onClick:o.bind(null,a)}," Delete movie")))}}]),t}(n.a.Component),h="https://api.themoviedb.org/3",p="56d1d4821208cf0910564f7a690a9354",b=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentWillReceiveProps",value:function(e,t){console.log("willReceiveProps"),console.log("nextProps sort_by",e.sort_by),console.log("prevProps sort_by",this.props.sort_by)}},{key:"shouldComponentUpdate",value:function(e,t){return e.sort_by!==this.props.sort_by}},{key:"render",value:function(){var e,t=this.props,a=t.sort_by,o=t.updateSortBy,c=function(e){return function(t){o(e)}};return n.a.createElement("ul",{className:"tabs nav nav-pills"},n.a.createElement("li",{className:"nav-item"},n.a.createElement("div",{className:(e="popularity.desc","nav-link  ".concat(a===e?"active":"")),onClick:c("popularity.desc")},"Popularity desc")),n.a.createElement("li",{className:"nav-item"},n.a.createElement("div",{className:"nav-link ".concat("revenue.desc"===a?"active":""),onClick:c("revenue.desc")},"Revenue desc")),n.a.createElement("li",{className:"nav-item"},n.a.createElement("div",{className:"nav-link ".concat("vote_average.desc"===a?"active":""),onClick:c("vote_average.desc")},"Vote avetage desc")))}}]),t}(n.a.Component),y=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(m.a)(this,Object(v.a)(t).call(this))).getMovies=function(){fetch("".concat(h,"/discover/movie?api_key=").concat(p,"&sort_by=").concat(e.state.sort_by)).then(function(e){return console.log("then"),e.json()}).then(function(t){console.log("data",t),e.setState({movies:t.results})})},e.removeMovie=function(t){var a=e.state.movies.filter(function(e){return e.id!==t.id});console.log(a),e.setState({movies:a})},e.addMovieToWillWatch=function(t){console.log(t);var a=[].concat(Object(s.a)(e.state.moviesWillWatch),[t]);console.log(a),e.setState({moviesWillWatch:a})},e.removeMovieFromWillWatch=function(t){var a=e.state.moviesWillWatch.filter(function(e){return e.id!==t.id});console.log(a),e.setState({moviesWillWatch:a})},e.updateSortBy=function(t){e.setState({sort_by:t})},e.state={movies:[],moviesWillWatch:[],sort_by:"revenue.desc"},e}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){console.log("didMount"),this.getMovies()}},{key:"componentDidUpdate",value:function(e,t){console.log("didUpdate"),console.log("prev",e,t),console.log("this",this.props,this.state),t.sort_by!==this.state.sort_by&&(console.log("call api"),this.getMovies())}},{key:"render",value:function(){var e=this;return console.log("render",this.state.sort_by),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row mt-4"},n.a.createElement("div",{className:"col-9"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12 mb-4"},n.a.createElement(b,{sort_by:this.state.sort_by,updateSortBy:this.updateSortBy}))),n.a.createElement("div",{className:"row"},this.state.movies.map(function(t){return n.a.createElement("div",{className:"col-6 mb-4",key:t.id},n.a.createElement(d,{movie:t,removeMovie:e.removeMovie,addMovieToWillWatch:e.addMovieToWillWatch,removeMovieFromWillWatch:e.removeMovieFromWillWatch}))}))),n.a.createElement("div",{className:"col-3"},n.a.createElement("p",null,"Will watch ",this.state.moviesWillWatch.length))))}}]),t}(n.a.Component);a(14);l.a.render(n.a.createElement(y,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.43535583.chunk.js.map