import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';

import './Movie.css';



class Movie extends React.Component {

    componentDidMount(){
      const { match: { params: { id }}} = this.props;
      this.props.getMovieDetail(id);
    }

    render() {
        return (
            <div className="movie-detail">
              <div className='movie-card'>
                <img src={ this.props.movie.Poster } className="img" alt={`Imagen de ${ this.props.movie.Title}`}/>
                <p>{this.props.movie.Title}</p>
                <p>{this.props.movie.Plot}</p>
              </div>
            </div>
        );
    }
}



function mapStateToProps(state) {
    return {
      movie: state.movieDetail // Mapeo las movies favoritas
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
        getMovieDetail: id => dispatch(getMovieDetail(id)) // Preparo la accion despachable remove
    };
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Movie);