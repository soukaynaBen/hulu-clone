import { ThumbUpIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import React from 'react'
import Header from '../../components/Header';
import Nav from '../../components/Nav';
import {PlayIcon}  from '@heroicons/react/outline'
function Movie({result}) {
    const BASE_URL='https://image.tmdb.org/t/p/original/'
    const imageSrc=`${BASE_URL}${ result.backdrop_path ||result.poster_path }` ||`
        ${BASE_URL}${result.poster_path}`
        const myLoader = ({ src, width, quality }) => {
          return `${src.trim()}?w=${width}&q=${quality || 75}`
        }
    

  return (
      <div className='relative min-h-screen'>
            <div className='absolute right-0 -z-10  bottom-0  left-0 top-0 ' >
                  <Image className=" relative object-cover bg-gray-700 rounded-sm"
                    loader={myLoader}
                  layout='fill'
                  loading='lazy'
                  src={imageSrc} 
                  alt={result.title || result.original_name}
                  />
                   <div className='absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-tr from-sky-900 '>
                    </div>    
            </div>
            
                    <Header/>
                    <Nav/>
                    <div className='py-6 sm:pt-16 pl-6 sm:pl-16'>
                            <h1 className="mt-1 text-lg sm:text-3xl text-white transition-all duration-100 ease-in-out group-hover:font-bold py-4">{result.title || result.original_name}</h1>
                         <p className='max-w-lg text-sm sm:text-lg'>{result.overview}</p>
                            <p className=" flex items-center py-4">
                            {result.media_type && `${result.media_type} *`}{" "}
                            {result.release_date || result.first_air_date }* {" "} <ThumbUpIcon  className="h-5 mx-2"/> {result.vote_count}
                            </p>
                            <button className=' bg-sky-600 text-sm md:text-lg text-white rounded-md shadow-inner border-2 mt-4 clear-both p-1 px-3 hover:scale-105 border-gray-300 font-bold  bg-gradient-to-b from-sky-900 whitespace-nowrap opacity-90 flex justify-center items-center'>Watch Now <PlayIcon className='w-10 h-10 md:h-12 md-w-12 pl-2'/> </button>
                           
                    </div>

            </div>
  )
}

export default Movie;

export async function getServerSideProps(context){
    const movie_id=context.query.id;
    const result= await fetch(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${process.env.API_KEY}&language=en-US`).then(
      res => res.json()
    );
    return {
      props:{
        result
      }
    }
  }