import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/useUpcomingMovies';
import useTopratedMovies from '../hooks/TopratedMovies';
import useUpcomingMovies from '../hooks/TopratedMovies';

const Browse = () =>{

  useNowPlayingMovies();
  usePopularMovies();
  useTopratedMovies();
  useUpcomingMovies();

  return (
    <div>
  <Header/>
  <MainContainer/>
  <SecondaryContainer/>
  {/*
  - Main video Container
    - Video background
    -  video title

  - Secondary COntainer
   -Movieslist *n
   -cards *n
   */}


    </div>
  )
}

export default Browse;
