import React, { useState, useEffect } from 'react'
import YouTube from 'react-youtube'
import axios from '../../axios'
import {API_KEY, imageUrl} from '../../constants/constants'
import './RowPost.css'


function RowPost(props) {
  const [movies, setMovies] = useState([])
  const [urlId, setUrlId] = useState('')
  useEffect(()=>{
        axios.get(props.url).then(response =>{
          console.log(response.data);
          setMovies(response.data.results)
        }).catch(err=>{
          alert('Network Error');
        })
  },[])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  
  const handleMovie = (id) =>{
    axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response =>{
      if(response.data.results.length!==0){
        setUrlId(response.data.results[0])
      }else{
        console.log("Array-empty trailler-Not-Available");
      }
    })
  }
  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className="posters">
        {
        movies.map((movie, index)=>
      <img key={index} onClick={() => handleMovie(movie.id)} className={props.isSmall ? 'small_poster' : 'poster'} src={`${imageUrl+movie.poster_path}`} alt="poster" />
        )
        }
      </div>
      { urlId && <YouTube opts={opts} videoId={urlId.key} /> }
    </div>
  )
}

export default RowPost
