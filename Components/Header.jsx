import Search from "./Search";


export default function Header() {

  
  return (
    <div>
      <div className="bg-mobileHero md:bg-hero h-[350px] bg-contain 2xl:bg-cover md:h-[600px] md:w-full bg-no-repeat 2xl:h-[1000px] ">
        <div className="hidden md:flex justify-between items-center text-white px-4 md:px-6 py-3">
          <div className="flex items-center">
            <img
              src="/assets/tv.png"
              alt="logo"
              className=" w-10 md:w-14"
            />
            <h1 className="text-xl ml-5">Movie Box</h1>
          </div>
          <Search  />
          <div className="flex items-center ">
            <h1 className="text-sm">Sign In</h1>
            <button>
              <img
                src="/assets/red-menu.png"
                alt="menu"
                className="w-6 md:w-10 ml-4"
              />
            </button>
          </div>
        </div>

        {/*--------------- MOBILE NAV  -----------------*/}

        <div className="flex justify-between items-center text-white px-4 py-3 md:hidden">
          <div className="flex items-center">
            <img
              src="/assets/tv.png"
              alt="logo"
              className=" w-8 md:w-14"
            />
            <h1 className="text-sm ml-5">Movie Box</h1>
          </div>
          <Search />
          <div className="flex items-center ">
            <div></div>
            <h1 className="text-sm">Sign In</h1>
            <button>
              <img
                src="/assets/red-menu.png"
                alt="menu"
                className="w-6 md:w-10 ml-4"
              />
            </button>
          </div>
        </div>

        {/* ---------- HERO TEXT  ------------------ */}
        <div className=" w-56 md:w-96 p-2 md:p-5 text-white  md:mt-20 ">
          <h1 className=" ml-[500px] text-3xl md:text-5xl font-semibold ">
            John Wick 3: Parabellum
          </h1>

          <div className="flex items-center mt-2 ">
            <div className="flex items-center">
              <img
                src="/assets/imdb.png"
                alt="imdb logo"
                className="w-6"
              />
              <p className="text-xs ml-2">86 / 100</p>
            </div>

            <div className="flex items-center ml-8">
              <img
                src="/assets/tomato.png"
                alt="rotten tomatoes logo"
                className="w-4"
              />
              <p className="text-xs ml-2 ">97%</p>
            </div>
          </div>
          <p className="mt-2 md:mt-5 text-[11px] md:text-base">
            John Wick is on the run after killing a member of the international
            assassins guild, and with a $14 million price tag on his head, he is
            the target of hit men and women everywhere.
          </p>
          <button className="flex items-center bg-movieRed rounded-lg  px-4 md:px-6 py-2 mt-2 md:mt-6">
            <img
              src="/assets/play.png"
              alt="play button"
              className="w-4"
            />
            <p className="text-xs md:text-sm ml-1">WATCH TRAILER</p>
          </button>
        </div>
      </div>
    </div>
  );
}