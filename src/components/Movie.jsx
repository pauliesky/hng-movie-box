// import React from 'react'
import axios from "axios";
// import { Link } from "react-router-dom";
// import Logo from "../assets/Logo.svg";
import Home from "../assets/Home.svg";
import Movie_Logo from "../assets/Movie Projector.svg";
import TV from "../assets/TV Show.svg";
import Calendar from "../assets/Calendar.svg";
import Logout from "../assets/Logout.svg";
import MB_Icon from "../assets/tv.png";
import two_ticks from "../assets/Two Tickets.svg";
import menuBar from "../assets/List.svg";
import expand_arrow from "../assets/Expand Arrow.png";
import star from "../assets/Star.png";
import rectangle from "../assets/Rectangle 37.png";
import List_white from "../assets/List-white.png";
// import { Link } from "react-router-dom";

import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Movie = () => {
  const { id } = useParams();

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=74b274727df9c40060517ed32c4bf77c`
      );
      let data = res.data;
      console.log(res);
      setMovies(data);
      console.log(data);
    };
    fetchMovies();
  }, []);

  return (
    <>
      <section className="flex">
        <aside className="h-full flex flex-col items-center w-[100px]  lg:w-[196px] py-6 border border-r border-gray rounded-r-[45px] fixed z-10 top-0 left-0 overflow-x-hidden">
          <div className="mt-5 flex justify-center gap-6 items-center mb-6">
            <img src={MB_Icon} />
            <p className="font-sans hidden lg:block text-2xl normal leading-6 font-bold text-[#333333]">
              Movie Box
            </p>
          </div>
          <div>
            <Link
              className="flex w-[196px] justify-center gap-9 h-24 bg-white items-center    hover:bg-[#d59e9e] hover:border-r-8 hover:border-[#BE123C]"
              to="/"
            >
              <img src={Home} />
              <p className="text-[#666] max-w-[80px] hidden lg:block  hover:text-[#BE123C] w-full text-left text-xl font-semibold leading-normal">
                Home
              </p>
            </Link>

            <span className="flex w-[196px] cursor-pointer justify-center gap-9 h-24 bg-white items-center    hover:bg-[#d59e9e] hover:border-r-8 hover:border-[#BE123C] ">
              <img src={Movie_Logo} />
              <p className="text-[#666] max-w-[80px] hidden lg:block hover:text-[#BE123C] w-full text-left text-xl font-semibold leading-normal">
                Movies
              </p>
            </span>
            <span className="flex w-[196px] cursor-pointer justify-center gap-9 h-24 bg-white items-center    hover:bg-[#d59e9e] hover:border-r-8 hover:border-[#BE123C]">
              <img src={TV} />
              <p className="text-[#666] max-w-[80px] hidden lg:block  hover:text-[#BE123C] w-full text-left text-xl font-semibold leading-normal">
                TV Series
              </p>
            </span>
            <span className="flex w-[196px] cursor-pointer justify-center gap-9 h-24 bg-white items-center  hover:bg-[#d59e9e] hover:border-r-8 hover:border-[#BE123C]">
              <img src={Calendar} />
              <p className="text-[#666] max-w-[80px] hidden lg:block  hover:text-[#BE123C] w-full text-left text-xl font-semibold leading-normal">
                Upcoming
              </p>
            </span>
          </div>
          <div className="w-38 flex flex-col hidden lg:block gap-2 pt-16  mt-10 pb-4 px-4 border  border-[#BE123C]/70 rounded-[20px] bg-[#F8E7EB]/40">
            <h2 className="text-[#333333] opacity-80 text-sm font-semibold leading-normal ">
              Play movie quizes <br /> and earn <br />
              free tickets
            </h2>
            <p className="text-[#666] text-sm font-[500] leading-normal ">
              50k people are playing <br /> now
            </p>
            <div className="rounded-[30px] text-[#BE123C]  mx-auto bg-[#BE123C]/20 px-4 py-[6px]">
              Start Playing
            </div>
          </div>
          <span className="flex w-[196px] cursor-pointer   mt-6 justify-center gap-9 h-24 bg-white items-center">
            <img src={Logout} />
            <p className="hidden lg:block">Logout</p>
          </span>
        </aside>
        <article className="w-full mr-16 ml-[126px] lg:ml-[226px]">
          <div className="w-full mt-[38px] max-w-[1198px] h-[359px]">
            <img
              src={`https://image.tmdb.org/t/p/original${movies.poster_path}`}
              className="w-full h-full rounded-[20px] object-fit "
            />
          </div>

          <div className="mt-8  grid lg:grid-cols-3 gap-16  ">
            <div className="col-span-2">
              <div className="flex gap-4">
                <span
                  data-testid="movie-title"
                  className=" text-[10px] lg:text-[20px] list-disc font-normal text-[#404040]"
                >
                  {movies.original_title}
                </span>
                <span
                  data-testid="movie-release-date"
                  className=" text-[10px] lg:text-[20px] list-disc font-normal text-[#404040]"
                >
                  {movies.release_date}
                  {new Date(movies.release_date).toUTCString()}
                </span>
                <span className=" text-[10px] lg:text-[20px] list-disc font-normal tet-[#404040]">
                  PG-13x
                </span>
                <span
                  data-testid="movie-runtime"
                  className="text-[20px] list-disc font-normal text-[#404040]"
                >
                  {movies.runtime}
                </span>
                {/* <span className="border py-1 px-4 text-center border-[#F8E7EB] text-[#B91C1C] text-[15px] rounded-full">
                  Action
                </span>
                <span className="border py-1 px-4  text-center border-[#F8E7EB] text-[#B91C1C] text-[15px] rounded-full">
                  Drama
                </span> */}
              </div>
              <div
                data-testid="movie-overview"
                className="py-[25px]  text-xl font-normal leading-normal text-[#333]"
              >
                {movies.overview}
              </div>
              <span className="flex mb-[20px]">
                <p className="text-[#333]  text-[20px]  font-normal text-xl">
                  Director:
                </p>
                <p className="text-[#BE123C] ml-2  font-normal text-xl">
                  Joseph Smith
                </p>
              </span>

              <span className="flex mb-[20px] ">
                <p className="text-[#333]  text-[20px]  font-normal text-xl">
                  Writers:
                </p>
                <p className="text-[#BE123C] ml-2 font-normal text-xl">
                  Mike Adenuga
                </p>
              </span>
              <span className="flex mb-[20px]">
                <p className="text-[#333] ml-2 text-[20px] font-normal text-xl">
                  Stars:
                </p>
                <p className="text-[#BE123C] ml-2 font-normal text-xl">
                  John Bell
                </p>
              </span>
              <div className="grid mt-10 grid-cols-4">
                <div className="bg-[#BE123C] flex rounded-[10px] justify-center font-[Poppins] col-span-1 text-white font-medium text-xl leading-normal items-center px-4 py-5">
                  Top Rated Movie #65
                </div>
                <div className="flex px-6 font-medium text-xl leading-normal col-span-3 font-[Poppins] text-[#333] items-center justify-between rounded-[10px] border border-solid border-[ #C7C7C7] bg-[#FFFFFF]/80">
                  Awards 9 noiminations
                  <img src={expand_arrow} />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex flex-row items-center justify-end gap-3 ">
                <img alt="star" src={star} />
                <p className="text-[#E8E8E8] font-Poppins text-[20px] font-normal">
                  8.5
                </p>
                <p className="text-[#666] pl-1 font-Poppins text-[20px] border-l-2 border-l-[#666] font-normal">
                  350k
                </p>
              </div>
              <div className="max-w-[360px] w-full gap-1 h-[55px] flex justify-center items-center rounded-[10px] bg-[#BE123C]">
                <img alt="two-ticks" src={two_ticks} />
                <p className="text-white font-medium text-xl leading-normal font-[Poppins] ">
                  See Showtimes
                </p>
              </div>
              <div className="max-w-[360px] w-full h-[55px] gap-1 text-black flex justify-center items-center rounded-[10px] bg-[#BE123C]/10">
                <img alt="menu" src={menuBar} />
                <p className="font-[Poppins] text-[#333] font-medium text-xl leading-normal ">
                  More watch options
                </p>
              </div>
              <div className="relative ">
                <img className="w-full" src={rectangle} />
                <div className="absolute py-[12px] bottom-1 w-full  flex justify-center items-center rounded-[10px] bg-[#121212]/50 text-white backdrop-blur-[2px]  ">
                  <img src={List_white} />
                  <p className="text-[ #E8E8E8]  text-[14px] leading-normal font-medium">
                    The Best Movies and Shows in September
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>
    </>
  );
};

export default Movie;
