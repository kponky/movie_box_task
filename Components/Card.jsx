/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import axios from 'axios'
import {Link} from 'react-router-dom'

export default function Card() {
  const [movieData, setMovieData] = useState([]);
  const [likedMovies, setLikedMovies] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [loading, setLoading] = useState(false);

  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/movie/top_rated",
    params: { language: "en-US", region: "US" },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYzhjNTA2YzI5NzJjNGQxODg0MTI1MmI5Yjc0OWZhNCIsInN1YiI6IjY0OGUxMmYzMmY4ZDA5MDBlMzg1NjQyMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.M8Wn9BI1Tjrwu9DnEQoFfceOggWszXEt2fxKGas2jQI",
    },
  };

  const getMovie = async () => {
    setLoading(true);
    try {
      const response = await axios.request(options);
      setMovieData(response.data.results);
      setLoading(false);
      setHasError(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
      setHasError(true);
    }
  };

  useEffect(() => {
    getMovie();
  }, []);

  function mapGenreIdsToNames(genreIds) {
    const genres = genreMap[0].genres;
    const genreNames = genreIds.map((id) => {
      const genre = genres.find((genre) => genre.id === id);
      return genre ? genre.name : "";
    });
    return genreNames.join(", ");
  }


  const toggleLike = (index) => {
    setLikedMovies((prevLikedMovies) =>
      prevLikedMovies.includes(index)
        ? prevLikedMovies.filter((movieIndex) => movieIndex !== index)
        : [...prevLikedMovies, index]
    );
  };

  const genreMap = [
    {
      genres: [
        {
          id: 28,
          name: "Action",
        },
        {
          id: 12,
          name: "Adventure",
        },
        {
          id: 16,
          name: "Animation",
        },
        {
          id: 35,
          name: "Comedy",
        },
        {
          id: 80,
          name: "Crime",
        },
        {
          id: 99,
          name: "Documentary",
        },
        {
          id: 18,
          name: "Drama",
        },
        {
          id: 10751,
          name: "Family",
        },
        {
          id: 14,
          name: "Fantasy",
        },
        {
          id: 36,
          name: "History",
        },
        {
          id: 27,
          name: "Horror",
        },
        {
          id: 10402,
          name: "Music",
        },
        {
          id: 53,
          name: "Thriller",
        },
        {
          id: 10752,
          name: "War",
        },
        {
          id: 37,
          name: "Western",
        },
        {
          id: 9648,
          name: "Mystery",
        },
        {
          id: 10749,
          name: "Romance",
        },
        {
          id: 878,
          name: "Science Fiction",
        },
        {
          id: 10770,
          name: "TV Movie",
        },
      ],
    },
  ];



  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : hasError ? (
        <div>Oops! An Error Has Occurred...</div>
      ) : (
        <div className="flex justify-between items-center p-3">
          <h1 className="text-3xl font-bold tracking-wide md:mt-10">
            Featured Movie
          </h1>
          <div className="flex items-center">
            <h4 className="text-movieRed md:text-lg">See more</h4>
            <img
              src="/assets/chevron-right.png"
              alt="chevron right"
              className="w-4"
            />
          </div>
        </div>
      )}

      <div className="grid grid-cols-2 md:grid-cols-5 gap-5 pt-10 px-3">
        {movieData &&
          movieData.slice(0, 10).map((movie, index) => (
            <div key={index}>
              <div className="card" data-testid="movie-card">
                <div className="relative">
                  <Link to={`/movie/${movie.id}`}>
                    <img
                      src={`http://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      alt="Movie Poster"
                      className="w-full"
                      data-testid="movie-poster"
                    />
                  </Link>
                  <div className="absolute right-0 top-0 p-2">
                    <button onClick={() => toggleLike(index)}>
                      <img
                        src={
                          likedMovies.includes(index)
                            ? "/assets/favourite.png"
                            : "/assets/fave.png"
                        }
                        alt="like icon"
                        className="w-6 bg-favorite bg-opacity-50 rounded-full p-1 z-20"
                      />
                    </button>
                  </div>
                </div>

                <h4
                  className="text-xs text-gray-400 mt-2 font-bold"
                  data-testid="movie-release-date"
                >
                  USA, {movie.release_date}
                </h4>
                <h1 className="font-bold mt-2" data-testid="movie-title">
                  {movie.title}
                </h1>

                <div className="flex justify-between items-center mt-2">
                  <div className="flex items-center">
                    <img
                      src="/assets/imdb.png"
                      alt="imdb logo"
                      className="w-6"
                    />
                    <p className="text-xs ml-2">
                      {movie.vote_average * 10} / 100
                    </p>
                  </div>

                  <div className="flex items-center">
                    <img
                      src="/assets/tomato.png"
                      alt="rotten tomatoes logo"
                      className="w-4"
                    />
                    <p className="text-xs ml-2 ">{movie.vote_average * 10}%</p>
                  </div>
                </div>
                {movie.genre_ids && (
                  <p
                    className="text-xs text-gray-400 mt-2"
                    data-testid="movie-genres"
                  >
                    {mapGenreIdsToNames(movie.genre_ids)}
                  </p>
                )}
              </div>
            </div>
          ))}
      </div>
    </>
  );
}