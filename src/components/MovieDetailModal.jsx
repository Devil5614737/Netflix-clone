import '../styles/movieDetailModal.css';
import {FaTimes} from 'react-icons/fa';
import {BsFillPlayFill} from 'react-icons/bs'
import {AiOutlinePlus} from 'react-icons/ai';
import {useSelector} from 'react-redux';


const imageLink = "https://image.tmdb.org/t/p/original";

export const MovieDetailModal=({setShowModal})=>{
const data=useSelector(state=>state.showTheMovieInfo)

const {movie}=data


    return (
        <div className="overlay">
            <div className="movieInfoCard">
             <img src={movie&&imageLink+movie.backdrop_path} alt='movie thumbnail'/>
             <div className="btnContainer">
                <button><BsFillPlayFill style={{
                    marginRight:5,
                    fontSize:19
                }}/> Play</button>
                <div className="btn2">
                    <AiOutlinePlus/>
                </div>
             </div>
             <div className="movieInfo">
                <p>{movie&&movie.title||movie&&movie.original_title}</p>
                <p className="desc">{movie.overview}</p>
                <hr />
                <div className="genre">
                    <p className="movieTitle">Info on {movie&&movie.title||movie&&movie.original_title}</p>
                    <div className="genreInfo">
                        
                        <p>Release date: <span>{movie&&movie.release_date}</span></p>
                        <p>Ratings: <span>{movie&&movie.vote_count}</span></p>
                    </div>
                </div>
             </div>
             <FaTimes onClick={()=>setShowModal(false)} color='white' style={{
                position:'absolute',
                top:10,
                right:10,
                fontSize:18,
                cursor:'pointer',

             }}/>
            </div>
        </div>
    )
}