import React, { useEffect, useState } from 'react';
import { Navbar } from '../components/Navbar';
import '../styles/home.css';
import {FaPlay} from 'react-icons/fa';
import {AiOutlineInfoCircle} from 'react-icons/ai';
import { MovieRow } from '../components/MovieRow';
import { useSelector,useDispatch } from 'react-redux';
import {fetchActionMovie, fetchComedyMovie, fetchDocumentaryMovie, fetchHorrorMovie, fetchMovie, fetchRomanticMovie, fetchTopRatedMovie} from '../redux/actions/actions';
import { MovieDetailModal } from '../components/MovieDetailModal';
import Bg from '../data/heroBg.json'

function Home() {
  const dispatch=useDispatch();
  const[showModal,setShowModal]=useState(false);
const state=useSelector(state=>state.fetchTheMovie);
const state2=useSelector(state=>state.fetchTheActionMovie);
const state3=useSelector(state=>state.fetchTheRomanticMovie);
const state4=useSelector(state=>state.fetchTheComedyMovie);
const state5=useSelector(state=>state.fetchTheDocumentaryMovie);
const state6=useSelector(state=>state.fetchTheHorrorMovie);
const state7=useSelector(state=>state.fetchTheTopRatedMovie);

// TODO:  fix the DRY issue



const {movies}=state;
const {actionMovies}=state2;
const {romanticMovies}=state3;
const {comedyMovies}=state4;
const {documentaryMovies}=state5;
const {horrorMovies}=state6;
const {topRatedMovies}=state7;




useEffect(()=>{
dispatch(fetchMovie())
dispatch(fetchActionMovie())
dispatch(fetchRomanticMovie())
dispatch(fetchComedyMovie())
dispatch(fetchDocumentaryMovie())
dispatch(fetchHorrorMovie())
dispatch(fetchTopRatedMovie())
},[])

let bg=Bg[0].backdrop_path


const imageLink = "https://image.tmdb.org/t/p/original";
const heroImage = imageLink+bg;

const hero={
  background: `url(${heroImage})`,
  backgroundSize:'cover'

}

  return (
    <>
   {showModal&&   <MovieDetailModal showModal={showModal} setShowModal={setShowModal}/>}
 
    <header className='hero'  style={hero}>
    <Navbar/>

<div className="heroContent">
  <h3>{Bg[0].title}</h3>
  <p>{Bg[0].overview}</p>
  <div className="heroButtons">
    <button><FaPlay style={{marginRight:5}}/> Play</button>
    <button><AiOutlineInfoCircle style={{marginRight:5}}/> More Info</button>
  </div>
</div>

    </header>
   <div className='mainContent'>
    <div className="rowsContainer">
      <MovieRow setShowModal={setShowModal} title='Trending Now' movies={movies&&movies.slice(0,5)} />
      <MovieRow setShowModal={setShowModal} title='Top Rated' movies={topRatedMovies&&topRatedMovies.slice(0,5)} />
      <MovieRow setShowModal={setShowModal} title='Action' movies={actionMovies&&actionMovies.slice(0,5).reverse()} />
      <MovieRow setShowModal={setShowModal} title='Romantic ' movies={romanticMovies&&romanticMovies.slice(0,5)} />
      <MovieRow setShowModal={setShowModal} title='Comedy' movies={comedyMovies&&comedyMovies.slice(0,5)} />
      <MovieRow setShowModal={setShowModal} title='Documentaries' movies={documentaryMovies&&documentaryMovies.slice(0,5)} />
      <MovieRow setShowModal={setShowModal} title='Horror' movies={horrorMovies&&horrorMovies.slice(0,5)} />
      
 
    </div>
   </div>
   
    </>
  )
}

export default Home