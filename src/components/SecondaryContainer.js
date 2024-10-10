import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector(store=>store.movies);
  return (
    <div>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
{/*
MovieList -Popular
- Trending
- Now Playing Movies
MovieList - Genres
MovieCards * n
 */}
    </div>
  )
}

export default SecondaryContainer
