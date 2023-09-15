import SearchBar from "./SearchBar";
import Poster from "../assets/Poster.png";
import Imbd from "../assets/imdb.svg";
import Tomatoe from "../assets/tomato.svg";
import Play from "../assets/Play.svg";
import Logo from "../assets/Logo.svg";
import Menu from "../assets/Menu.svg";

const Hero = () => {
  return (
    <>
      <nav className="absolute px-24 flex flex-row justify-between z-10 w-full top-2 items-center text-white">
        <div>
          <img src={Logo} />
        </div>
        <SearchBar />
        <div className="flex gap-3 items-center">
          <img src={Menu} />
          <span>Sign in</span>
        </div>
      </nav>

      <div className=" w-[200px] relative">
        <img className="max-w-none" alt="poster" src={Poster} />
      </div>
      {/* <div  style={background-image: `url${}` }className="bg-fixed"></div> */}
      <div className=" max-w-[404px] w-full text-white font-sans absolute top-48 left-24 flex flex-col gap-4 ">
        <h1 className=" text-7xl text-sky  normal-case font-bold leading-[56px] ">
          John Wick 3 : <br /> Parabellum
        </h1>
        <span className="flex my-2 gap-[34px] ">
          <div className="flex gap-[10px]">
            <img src={Imbd} />
            <span>86.0/100</span>
          </div>
          <div className="flex gap-[10px]">
            <img src={Tomatoe} />
            <span>97%</span>
          </div>
        </span>
        <p className="w-[302px] mb-2 text-xl ">
          John Wick is on the run after killing a member of the international
          assassins guild, and with a $14 million price tag on his head, he is
          the target of hit men and women everywhere.
        </p>
        <button className="w-[149px] bg-rose-700 px-4 py-2 text-center rounded-md  justify-center gap-2 flex">
          <img src={Play} />
          <div className=" font-bold leading-6 uppercase font-sans text-sm">
            Watch Trailer
          </div>
        </button>
      </div>
    </>
  );
};

export default Hero;
