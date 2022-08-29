import React,{useEffect,useState} from 'react'
import './RowPost.css'
import {API_KEY, imageUrl} from '../../Constants/constants'
import axios from '../../axios'
import Youtube from 'react-youtube'

function RowPost(props) {
    const [movies, setMovies] = useState([])
    const [urlid, setUrlid] = useState('')
    useEffect(() => {
      axios.get(props.url).then((response)=>{
        setMovies(response.data.results)
        console.log(movies)
      })


    }, [])

    const opts = {
      height: '390',
      width: '100%',
      playerVars: {
        autoplay: 1,
      },
    };
    const handleMovie = (id)=>{
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
          if(response.data.results.length!==0){
            setUrlid(response.data.results[0])
          }
          console.log(response.data)
        })
    }    

  return (
    <div className='row'>
       <h2>{props.title}</h2>
        <div className='posters'>

            {movies.map((obj)=>

                <img onClick={()=>handleMovie(obj.id)} className={props.isSmall? 'smallPoster':'poster' } alt='poster' src={`${imageUrl+obj.backdrop_path}`} />

            )}


        </div>
        { urlid &&  <Youtube videoId={urlid.key} opts={opts} />}
    </div>
  )
}

export default RowPost