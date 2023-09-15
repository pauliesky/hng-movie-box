/* eslint-disable react/no-unknown-property */
// import React from 'react'
import { useState } from "react";
import MovieCard from "../components/MovieCard";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    function getMovies() {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NGIyNzQ3MjdkZjljNDAwNjA1MTdlZDMyYzRiZjc3YyIsInN1YiI6IjY1MDBiMmUzMWJmMjY2MDBmZmI1YzgwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PWLOOpqYULjaJobOhKk1NEveHjKXt3kNxbd4EbSskHw",
        },
      };

      fetch(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=74b274727df9c40060517ed32c4bf77c ",
        options
      )
        .then((response) => response.json())
        .then((response) => {
          let result = response.results.slice(0, 10);
          console.log(result);
          setMovies(result);
        })
        .catch((err) => console.error(err));
    }
    getMovies();
  }, []);
  console.log(movies);

  return (
    <>
      <section className="mx-20 mt-20">
        <header className="flex justify-between mb-10">
          <span className="font-sans text-black font-bold text-4xl">
            Featured Movie
          </span>
          <span className="flex">
            <p className="font-sans text-lg leading-6 font-normal gap-3 align-center text-[#BE123C]">
              See More
            </p>
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.5 4.66668L13.3333 10.5L7.5 16.3333"
                stroke="#B91C1C"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </header>

        <article className="gap-6 w-full grid sm:grid-cols-2 items-center md:grid-cols-3 lg:grid-cols-4">
          {movies.map((item) => {
            return (
              <>
                <Link to={`/movies/${item.id}`}>
                  <MovieCard
                    key={item.id}
                    // {...item}
                    release_date={item.release_date}
                    original_title={item.original_title}
                    poster_path={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                  />
                </Link>
              </>
            );
          })}
        </article>
      </section>
    </>
  );
};

export default Movies;
