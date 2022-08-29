import React, { useEffect, useState } from 'react'
import {API_KEY,imageUrl} from '../../Constants/constants'
import './Banner.css'
import axios from '../../axios'
function Banner() {
    const [movie, setMovie] = useState([])
    useEffect(() => {
     axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
        setMovie(response.data.results.sort(function () { return 0.5 - Math.random() })[0])
        console.log(response.data.results)
        console.log(Math.random())
    })
}, [])

    return (
        <div 
        style={{backgroundImage: `url(${movie?imageUrl+movie.backdrop_path:''})`}}
         className='banner'>
            <div className='content' >
                <h1 className='title'>{movie?movie.name || movie.title:''}</h1>
                <div className='banner_buttons' >
                    <button className='button' >Play</button>
                    <button className='button' >My list</button>
                </div>
                <h1 className='description'>{movie?movie.overview:''}</h1>
            </div>
        <div className="fade_bottom"></div>
        </div>
    )
}

export default Banner