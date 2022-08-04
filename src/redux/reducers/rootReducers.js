import { combineReducers } from "redux";
import {loginTheUser,signupTheUser,fetchTheMovie,showTheMovieInfo,fetchTheTopRatedMovie,fetchTheActionMovie,fetchTheComedyMovie,fetchTheHorrorMovie,fetchTheDocumentaryMovie, fetchTheRomanticMovie,searchTheData} from './index';


export const rootReducer=combineReducers({
    loginTheUser,
    signupTheUser,
    fetchTheMovie,
    showTheMovieInfo,
    fetchTheTopRatedMovie,
    fetchTheActionMovie,
    fetchTheComedyMovie,
    fetchTheHorrorMovie,
    fetchTheDocumentaryMovie,
    fetchTheRomanticMovie,
    searchTheData

})