import {
    FETCH_MOVIE_FAILED,
    FETCH_MOVIE_REQUEST,
    FETCH_MOVIE_SUCCESS,
    LOGIN_FAILED,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    SHOW_MOVIE_DETAIL,
    SIGNUP_FAILED,
    SIGNUP_REQUEST,
    SIGNUP_SUCCESS,
    FETCH_TOP_RATED_REQUEST,
    FETCH_TOP_RATED_SUCCESS,
    FETCH_TOP_RATED_FAILED,
    FETCH_ROMANTIC_SUCCESS,
    FETCH_ROMANTIC_REQUEST,
    FETCH_HORROR_FAILED,
    FETCH_DOCUMENTARIES_SUCCESS,
    FETCH_DOCUMENTARIES_FAILED,
    FETCH_DOCUMENTARIES_REQUEST,
    FETCH_COMEDY_FAILED,
    FETCH_COMEDY_SUCCESS,
    FETCH_COMEDY_REQUEST,
    FETCH_ACTION_SUCCESS,
    FETCH_ACTION_FAILED,
    FETCH_ACTION_REQUEST,
    FETCH_HORROR_REQUEST,
    FETCH_HORROR_SUCCESS,
    SEARCH_DATA_REQUEST,
    SEARCH_DATA_SUCCESS,
    SEARCH_DATA_FAILED,
} from "../constants";
import {
    auth
} from '../../firebase/config';
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword
} from "firebase/auth";

import axios from "axios";
// import {trendings} from '../../api'



const api_key = '2edf9f02e088272f6ff2eab6bf5fa21a'


export const Login = (email, password) => (dispatch) => {
    dispatch({
        type: LOGIN_REQUEST
    });
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {

            const user = userCredential.user;
            if(user){
                localStorage.setItem('currentUser',JSON.stringify(user))
                
            }
            dispatch({
                type: LOGIN_SUCCESS,
                payload: user
            })
        })
        .catch((error) => {
            const errorMessage = error.message;
            alert(errorMessage)
            dispatch({
                type: LOGIN_FAILED,
                payload: errorMessage
            })
        });

};




export const Signup = (email, password) => (dispatch) => {

    dispatch({
        type: SIGNUP_REQUEST
    });

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {

            const user = userCredential.user;
            dispatch({
                type: SIGNUP_SUCCESS,
                payload: user
            })

        })
        .catch((error) => {
            const errorMessage = error.message;
 
            dispatch({
                type: SIGNUP_FAILED,
                payload: errorMessage
            })
            // ..
        });
}


export const fetchMovie = () => async (dispatch) => {
    dispatch({
        type: FETCH_MOVIE_REQUEST
    })

    try {

        const {
            data
        } = await axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${api_key}&language=en-US`)
   
        dispatch({
            type: FETCH_MOVIE_SUCCESS,
            payload: data.results
        })

    } catch (error) {
        dispatch({
            type: FETCH_MOVIE_FAILED,
            payload: error
        })
    }
}

export const fetchTopRatedMovie = () => async (dispatch) => {
    dispatch({
        type: FETCH_TOP_RATED_REQUEST
    })

    try {

        const {
            data
        } = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=en-US`)
   
        dispatch({
            type: FETCH_TOP_RATED_SUCCESS,
            payload: data.results
        })

    } catch (error) {
        dispatch({
            type: FETCH_TOP_RATED_FAILED,
            payload: error
        })
    }
}



export const fetchActionMovie = () => async (dispatch) => {
    dispatch({
        type: FETCH_ACTION_REQUEST
    })

    try {

        const {
            data
        } = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=28`)
   
    
        dispatch({
            type: FETCH_ACTION_SUCCESS,
            payload: data.results
        })

    } catch (error) {
        dispatch({
            type: FETCH_ACTION_FAILED,
            payload: error
        })
    }
}

export const fetchComedyMovie = () => async (dispatch) => {
    dispatch({
        type: FETCH_COMEDY_REQUEST
    })

    try {

        const {
            data
        } = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_gneres=35`)
   
        dispatch({
            type: FETCH_COMEDY_SUCCESS,
            payload: data.results
        })

    } catch (error) {
        dispatch({
            type: FETCH_COMEDY_FAILED,
            payload: error
        })
    }
}


export const fetchHorrorMovie = () => async (dispatch) => {
    dispatch({
        type: FETCH_HORROR_REQUEST
    })

    try {

        const {
            data
        } = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=27`)
   
        dispatch({
            type: FETCH_HORROR_SUCCESS,
            payload: data.results
        })

    } catch (error) {
        dispatch({
            type: FETCH_HORROR_FAILED,
            payload: error
        })
    }
}

export const fetchRomanticMovie = () => async (dispatch) => {
    dispatch({
        type: FETCH_ROMANTIC_REQUEST
    })

    try {

        const {
            data
        } = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=10749`)
   
        dispatch({
            type: FETCH_ROMANTIC_SUCCESS,
            payload: data.results
        })

    } catch (error) {
        dispatch({
            type: FETCH_ROMANTIC_FAILED,
            payload: error
        })
    }
}


export const fetchDocumentaryMovie = () => async (dispatch) => {
    dispatch({
        type: FETCH_DOCUMENTARIES_REQUEST
    })

    try {

        const {
            data
        } = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=99`)
   
        dispatch({
            type: FETCH_DOCUMENTARIES_SUCCESS,
            payload: data.results
        })

    } catch (error) {
        dispatch({
            type: FETCH_DOCUMENTARIES_FAILED,
            payload: error
        })
    }
}



export const movieDetail=(data)=>{
    return {
        type:SHOW_MOVIE_DETAIL,
        payload:data
    }
}


export const searchMovie = (query) => async (dispatch) => {
    try {
      dispatch({
    type: SEARCH_DATA_REQUEST,
      });
  const {data}=await axios.get(`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${api_key}&with_genres=10749`);

  dispatch({
    type:SEARCH_DATA_SUCCESS,
    payload:data.results
  })


     
    }
    catch(error){
        dispatch({
            type:SEARCH_DATA_FAILED,
            payload:error
          })
    }
  };