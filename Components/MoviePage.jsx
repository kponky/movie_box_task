import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";

export default function MoviePage() {
  const [movieInfo, setMovieInfo] = useState({});
  const [loading, setLoading] = useState(true);
  const [usCertification, setUsCertification] = useState("");
  const [formattedRuntime, setFormattedRuntime] = useState("");

  const getRandomMovieId = () => {
    // Generate a random movie id between 1 and 100000 (adjust as needed).
    return Math.floor(Math.random() * 100000) + 1;
  };

  const details = {
    method: "GET",
    url: `https://api.themoviedb.org/3/movie/${getRandomMovieId()}?append_to_response=credits,release_dates`,
    params: { language: "en-US" },
    headers: {
      accept: "application/json",
      Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYWU0NWJjNTBlNjViM2M2ZWExNWNjYTBhYTVmM2UxZSIsInN1YiI6IjY1MDA5YWYwZDdkY2QyMDBlMmZkMDJiYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gdM0-dy_Af2OEG7v9dwz0GRNPwR0yNjCQ5TVs7nlJsI",
        },
  };

  const movieDetails = async () => {
    setLoading(true);
    try {
      const response = await axios.request(details);
      setMovieInfo(response.data);
      setLoading(false);

      const desiredCountryCode = "US";
      const releaseDateEntry = response.data.release_dates.results.find(
        (entry) => entry.iso_3166_1 === desiredCountryCode
      );

      if (releaseDateEntry) {
        const usCertification = releaseDateEntry.release_dates[0]?.certification;
        setUsCertification(usCertification);
      }

      const runtimeInMinutes = response.data.runtime;
      const hours = Math.floor(runtimeInMinutes / 60);
      const minutes = runtimeInMinutes % 60;
      setFormattedRuntime(`${hours}h ${minutes}min`);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    movieDetails();
  }, []);

  const formatDateToUTC = (dateString) => {
    const date = new Date(dateString);
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minutes: "2-digit",
      seconds: "2-digit",
      milliseconds: "2-digit",
      timeZone: "UTC",
    };
    return date.toLocaleDateString("en-US", options);
  };
  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-[20%_80%]  gap-4">
          <Sidebar />
          <div className="p-3 md:p-14 2xl:p-10 overflow-x-hidden">
            <div className="relative">
              <img
                src={`http://image.tmdb.org/t/p/w500${movieInfo.backdrop_path}`}
                alt="movie trailer"
                className="w-full rounded-xl overflow-hidden"
              />
              <div className="centered">
                <img
                  src="/assets/white-play.png"
                  alt="play button"
                  className=" w-20 md:w-full bg-gray-400 bg-opacity-25 rounded-full p-3"
                />
                <p className="text-white text-center mt-2 text-lg">
                  Watch Trailer
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[70%_30%] gap-4 ">
              <div>
                <div className="block md:flex items-center mt-5 ">
                  <h2
                    data-testid="movie-title"
                    className="text-1xl 2xl:text-2xl tracking-wide"
                  >
                    {movieInfo.title}
                  </h2>
                  <span className="hidden md:flex md:ml-3">•</span>
                  <p
                    data-testid="movie-release-date"
                    className="md:ml-5 text-1xl 2xl:text-2xl"
                  >
                    {formatDateToUTC(movieInfo.release_date)}
                  </p>
                  <span className="hidden md:flex ml-3 mr-3">•</span>

                  {usCertification ? (
                    <p className="text-1xl 2xl:text-2xl">{usCertification}</p>
                  ) : (
                    <p>US Certification not available</p>
                  )}
                  <span className="hidden md:flex ml-3 mr-3">•</span>
                  <p
                    data-testid="movie-runtime"
                    className="text-1xl 2xl:text-2xl"
                  >
                    {formattedRuntime && <p>{formattedRuntime}</p>}
                  </p>
                  <span className="hidden md:flex md:ml-3">•</span>

                  {movieInfo.genres.slice(0, 2).map((genre, index) => (
                    <div key={index}>
                      <div className="">
                        <p className="md:ml-2 w-max px-2  text-sm border border-movieRed rounded-full md:px-2 border-opacity-25 md:text-base text-movieRed my-2">
                          {genre.name}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <p data-testid="movie-overview">{movieInfo.overview}</p>
                <div className="block md:flex items-center mt-2 ">
                  <h1 className="text-xl">Director:</h1>
                  {[
                    movieInfo.credits.cast
                      .filter(
                        (person) => person.known_for_department === "Directing"
                      )
                      .map((director) => director.name)
                      .slice(0, 1),
                    ...movieInfo.credits.crew
                      .filter(
                        (person) => person.known_for_department === "Directing"
                      )
                      .map((director) => director.name)
                      .slice(0, 1),
                  ].map((directors, i) => (
                    <div key={i}>
                      <p className="md:ml-2 text-movieRed text-lg">
                        {" "}
                        {directors}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="block md:flex items-center mt-2">
                  <h1 className=" text-xl">Writer:</h1>
                  {movieInfo.credits.crew.some(
                    (person) => person.known_for_department === "Writing"
                  ) ? (
                    movieInfo.credits.crew
                      .filter(
                        (person) => person.known_for_department === "Writing"
                      )
                      .slice(0, 1)
                      .map((writer, i) => (
                        <div key={i}>
                          <p className="text-movieRed text-lg md:ml-2">
                            {writer.name}
                          </p>
                        </div>
                      ))
                  ) : (
                    <div>
                      <p className="text-movieRed text-lg md:ml-2">Unknown</p>
                    </div>
                  )}
                </div>
                <div className="block md:flex items-center mt-2">
                  <div>
                    <h1 className="text-xl">Stars:</h1>
                  </div>

                  {movieInfo.credits.cast.slice(0, 3).map((credit, index) => (
                    <div key={index}>
                      <p className="md:ml-2 text-lg text-movieRed">
                        {credit.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-6">
                <button className="flex items-center justify-center bg-movieRed rounded-lg px-3 py-3 w-full mb-2">
                  <img
                    src="/assets/tickets.png"
                    alt="ticket"
                    className="w-8"
                  />
                  <p className="ml-3 text-white">See Showtimes</p>
                </button>
                <button className="flex items-center justify-center bg-movieRed bg-opacity-25 rounded-lg px-3 py-3 w-full border border-movieRed">
                  <img src="/assets/list.png" alt="list" className="w-7" />
                  <p className="ml-3 text-black">More watch options</p>
                                  </button>
                                  <img src="/assets/group52.png" alt="" className="mt-4 w-full"/>
                              </div>
                              
            </div>
          </div>
        </div>
      )}
    </div>
  );
}