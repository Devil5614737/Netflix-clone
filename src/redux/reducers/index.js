import {
  FETCH_ACTION_FAILED,
  FETCH_ACTION_REQUEST,
  FETCH_ACTION_SUCCESS,
  FETCH_COMEDY_FAILED,
  FETCH_COMEDY_REQUEST,
  FETCH_COMEDY_SUCCESS,
  FETCH_DOCUMENTARIES_FAILED,
  FETCH_DOCUMENTARIES_REQUEST,
  FETCH_DOCUMENTARIES_SUCCESS,
  FETCH_HORROR_FAILED,
  FETCH_HORROR_REQUEST,
  FETCH_HORROR_SUCCESS,
  FETCH_MOVIE_FAILED,
  FETCH_MOVIE_REQUEST,
  FETCH_MOVIE_SUCCESS,
  FETCH_ROMANTIC_FAILED,
  FETCH_ROMANTIC_REQUEST,
  FETCH_ROMANTIC_SUCCESS,
  FETCH_TOP_RATED_FAILED,
  FETCH_TOP_RATED_REQUEST,
  FETCH_TOP_RATED_SUCCESS,
  LOGIN_FAILED,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  SEARCH_DATA_FAILED,
  SEARCH_DATA_REQUEST,
  SEARCH_DATA_SUCCESS,
  SHOW_MOVIE_DETAIL,
  SIGNUP_FAILED,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
} from "../constants";

export const loginTheUser = (state = {
    loading:false,
    user:localStorage.getItem('user')?JSON.parse(localStorage.getItem('user')):null,
    error:null
}, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_REQUEST:
      return {
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: payload,

      };
    case LOGIN_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
export const signupTheUser = (state = {
    loading:false,
    user:localStorage.getItem('user')?JSON.parse(localStorage.getItem('user')):null,
    error:null
}, action) => {
  const { type, payload } = action;
  switch (type) {
    case SIGNUP_REQUEST:
      return {
        loading: true,
      };
    case SIGNUP_SUCCESS:
      return {
        ...user,
        loading: false,
        user: payload,
      };
    case SIGNUP_FAILED:
      return {
        ...user,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
export const fetchTheMovie = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_MOVIE_REQUEST:
      return {
        loading: true,
      };
    case FETCH_MOVIE_SUCCESS:
      return {
        loading: false,
        movies: payload,
      };
    case FETCH_MOVIE_FAILED:
      return {
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
export const fetchTheTopRatedMovie = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_TOP_RATED_REQUEST:
      return {
        loading: true,
      };
    case FETCH_TOP_RATED_SUCCESS:
      return {
        loading: false,
        topRatedMovies: payload,
      };
    case FETCH_TOP_RATED_FAILED:
      return {
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export const fetchTheActionMovie = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_ACTION_REQUEST:
      return {
        loading: true,
      };
    case FETCH_ACTION_SUCCESS:
      return {
        loading: false,
        actionMovies: payload,
      };
    case FETCH_ACTION_FAILED:
      return {
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
export const fetchTheComedyMovie = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_COMEDY_REQUEST:
      return {
        loading: true,
      };
    case FETCH_COMEDY_SUCCESS:
      return {
        loading: false,
        comedyMovies: payload,
      };
    case FETCH_COMEDY_FAILED:
      return {
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
export const fetchTheHorrorMovie = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_HORROR_REQUEST:
      return {
        loading: true,
      };
    case FETCH_HORROR_SUCCESS:
      return {
        loading: false,
        horrorMovies: payload,
      };
    case FETCH_HORROR_FAILED:
      return {
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
export const fetchTheRomanticMovie = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_ROMANTIC_REQUEST:
      return {
        loading: true,
      };
    case FETCH_ROMANTIC_SUCCESS:
      return {
        loading: false,
        romanticMovies: payload,
      };
    case FETCH_ROMANTIC_FAILED:
      return {
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
export const fetchTheDocumentaryMovie = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_DOCUMENTARIES_REQUEST:
      return {
        loading: true,
      };
    case FETCH_DOCUMENTARIES_SUCCESS:
      return {
        loading: false,
        documentaryMovies: payload,
      };
    case FETCH_DOCUMENTARIES_FAILED:
      return {
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export const showTheMovieInfo = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case SHOW_MOVIE_DETAIL:
      return {
        movie: payload,
      };
    default:
      return state;
  }
};

export const searchTheData = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case SEARCH_DATA_REQUEST:
      return { loading: true };
    case SEARCH_DATA_SUCCESS:
      return { loading: false, movies: payload };
    case SEARCH_DATA_FAILED:
      return { loading: false, error: payload };
    default:
      return state;
  }
};
