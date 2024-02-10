import {
  useState,
  useEffect,
} from "react";
import styled from "styled-components";
import {
  useNavigate,
  useLocation,
} from "react-router-dom";
import movieState from "../movieState";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const MovieDetail = () => {
  const [movies, setMovies] =
    useState(movieState);
  const [movie, setMovie] =
    useState(null);
  const location = useLocation();
  const url = location.pathname;

  useEffect(() => {
    const currentMovie = movies.find(
      (stateMovie) =>
        stateMovie.url === url
    );
    setMovie(currentMovie);
    console.log(currentMovie);
  }, [movies, url]);
  return (
    // <div>
    //   <h1>MovieDetail</h1>
    //   {movie && (
    //     <img src={movie.mainImg} />
    //   )}
    // </div>
    <>
      {movie && (
        <Details
          exit="exit"
          variants={pageAnimation}
          initial="hidden"
          animate="show"
        >
          <HeadLine>
            <h2>{movie.title}</h2>
            <img
              src={movie.mainImg}
              alt="movie"
            />
          </HeadLine>
          <Awards>
            {movie.awards.map(
              ({
                title,
                description,
              }) => {
                return (
                  <Award
                    key={title}
                    title={title}
                    description={
                      description
                    }
                  />
                );
              }
            )}
          </Awards>
          <ImageDisplay>
            <img
              src={movie.secondaryImg}
              alt="movie"
            />
          </ImageDisplay>
        </Details>
      )}
    </>
  );
};
const Details = styled(motion.div)`
  color: white;
`;
const HeadLine = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const Awards = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
`;

const AwardStyle = styled.div`
  padding: 5rem;
  h3 {
    font-size: 2rem;
  }
  .line {
    width: 100%;
    background: #23d997;
    height: 0.5rem;
    margin: 1rem 0rem;
  }
  p {
    padding: 2rem 0rem;
  }
`;

const ImageDisplay = styled.div`
  min-height: 50vh;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const Award = (props) => {
  return (
    <AwardStyle>
      <h3>{props.title}</h3>
      <div className="line"></div>
      <p>desc--{props.description}</p>
    </AwardStyle>
  );
};
export default MovieDetail;
