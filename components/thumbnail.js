import {  ThumbUpIcon } from "@heroicons/react/outline";
import Image from "next/image"
import React  from 'react'

function thumbnail({result}) {
 
    const BASE_URL='https://image.tmdb.org/t/p/original/'
    const myLoader = ({ src, width, quality }) => {
    
        return `${src.trim()}?w=${width}&q=${quality || 75}`
      }
    
    return (
        <div className=' p-2 transition duration-200 ease-in transform group cursor-pointer sm:hover:scale-105 hover:z-50'>
            <Image className=" bg-gray-700 rounded-sm"
             layout='responsive'
             width={1920}
             height={1080}
             loading='lazy'
             loader={myLoader}
             src={
                 `${BASE_URL}${
                     result.backdrop_path ||result.poster_path }
                      `||
                     `${BASE_URL}${result.poster_path}`
             } 
             alt={result.title || result.original_name}
            />
            <div className='p-2'>
                <p className='truncate max-w-md'>{result.overview}</p>
                <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">{result.title || result.original_name}</h2>
                <p className=" flex items-center opacity-0 group-hover:opacity-100">
                {result.media_type && `${result.media_type} *`}{" "}
                {result.release_date || result.first_air_date }* {" "} <ThumbUpIcon  className="h-5 mx-2"/> {result.vote_count}
                </p>
            </div>
        </div>
    )
          
}
export default thumbnail;
