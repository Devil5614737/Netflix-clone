import { BsFillPlayFill, BsPlusLg } from "react-icons/bs";
import { FaChevronDown } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { movieDetail } from "../redux/actions/actions";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const imageLink = "https://image.tmdb.org/t/p/original";

export const MovieCard = ({ icons, img, setShowModal, data }) => {
  const dispatch = useDispatch();

  const showMovie = (data) => {
    dispatch(movieDetail(data));
  };

  return (
    <div className="card">
      <LazyLoadImage 
      effect="blur"
      loading="lazy" src={imageLink + img} alt="movie thumbnail" />
      {icons === "true" && (
        <div className="icons">
          <div className="icon">
            <BsFillPlayFill style={{ fontSize: 12 }} />
          </div>
          <div className="icon">
            <BsPlusLg style={{ fontSize: 12 }} />
          </div>
          <div className="icon" onClick={() => setShowModal(true)}>
            <FaChevronDown
              onClick={() => showMovie(data)}
              style={{ fontSize: 12 }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

MovieCard.defaultProps = {
  img: "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGFya3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
};
