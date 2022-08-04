import { MovieCard } from "./MovieCard"

export const MovieRow=({title,movies,setShowModal={setShowModal}})=>{
    return(
        <div className="row">
        <p className='title'>{title}</p>
        <div className="movies">
          <div className="movieCard">
            {movies&&movies.map(movie=>
            <MovieCard icons='true' key={movie.id} setShowModal={setShowModal} img={movie.backdrop_path} data={movie}/>
              )}
           
          </div>
        </div>
        
      </div>
    )
}