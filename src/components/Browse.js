import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {

  useNowPlayingMovies();

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
