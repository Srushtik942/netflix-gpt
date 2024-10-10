import React from 'react'
import { IMG_CDN_URL } from '../utils/constants';

const MovieCard = ({posterPath}) => {
  return (
    <div>

    <img alt="No Speak Evil" src={IMG_CDN_URL + posterPath }
    ></img>


    </div>
  )
}

export default MovieCard;
