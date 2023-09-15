/* eslint-disable react/prop-types */
// import React from 'react'
import Imbd from "../assets/imdb.svg";
import Tomatoe from "../assets/tomato.svg";
import favourite from "../assets/Favorite.svg";

const MovieCard = ({ release_date, original_title, poster_path }) => {
  return (
    <section
      data-testid="movie-card"
      className="md:max-w-[250px] relative w-full h-[490px] flex flex-col gap-3"
    >
      <img className="h-[20px] w-[20px] right-0  hover:bg-sky-400 absolute" src={favourite} />
      <img
        data-testid="movie-poster"
        className=" h-[370px]"
        src={poster_path}
        alt={original_title}
      />
      <div className="font-sans font-bold text-base text-[#9CA3AF]">
        <span>USA,</span>
        <span data-testid="movie-release-date">
          {new Date(release_date).toUTCString()}
        </span>
      </div>
      <h1
        className="font-bold leading-6 font-sans text-2xl text-[#111827]"
        data-testid="movie-title"
      >
        {original_title}
      </h1>
      <span className="flex justify-between ">
        <div className="flex gap-[10px]">
          <img src={Imbd} />
          <span>86.0/100</span>
        </div>
        <div className="flex gap-[10px]">
          <img src={Tomatoe} />
          <span>97%</span>
        </div>
      </span>
      <div>
        <span>Action</span>
      </div>
    </section>
  );
};

export default MovieCard;
