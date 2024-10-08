import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants'


//fetching trailer video

const VideoBackgroun = (movieId) => {

    const getMovieVideos = async () =>{
        const data = await fetch('https://api.themoviedb.org/3/movie/1114513/videos?language=en-US',API_OPTIONS );

        const json = await data.json();
        console.log(json);

        const filtertrailer = json.results.filter((video)=> video.type === "Trailer");

       const trailer = filtertrailer.length? filtertrailer[0] : json.results[0];
        console.log(trailer);

    };

    useEffect(()=>{

        getMovieVideos();

    },[]);

  return (
    <div>

    </div>
  )
}

export default VideoBackgroun
