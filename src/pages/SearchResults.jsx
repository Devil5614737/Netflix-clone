import React from 'react';
import {Navbar} from '../components/Navbar';
import {MovieCard} from '../components/MovieCard';
import '../styles/results.css';
import { useSelector } from 'react-redux';

const imageLink = "https://image.tmdb.org/t/p/original";



function SearchResults() {
  const results=useSelector(state=>state.searchTheData)
const {movies}=results
 
  return (
    <>
    <Navbar/>
    <div className="cardsContainer">
      {movies&&movies.map(movie=><MovieCard key={movie.id} img={movie.backdrop_path} icons='false' />)}
        
        
    </div>
    </>
  )
}

export default SearchResults