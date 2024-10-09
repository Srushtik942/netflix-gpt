
import {  useSelector } from 'react-redux';
import useFetchTrailerVideo from '../hooks/useFetchTrailerVideo';

//fetching trailer video

const VideoBackgroun = (movieId) => {

  //fetcing trailer of particular movie dynamically
    // const [trailerId, settrailerId] = useState(null);

    const trailerVideo = useSelector((store)=>store.movies?.trailerVideo);

     // settrailerId(trailer.key);

     useFetchTrailerVideo(movieId);


  return (
    <div>

    <iframe width="560" height="315"
    src={"https://www.youtube.com/embed/"+trailerVideo?.key }
     title="YouTube video player"
     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
     referrerPolicy="strict-origin-when-cross-origin"
     ></iframe>

    </div>
  )
}

export default VideoBackgroun
