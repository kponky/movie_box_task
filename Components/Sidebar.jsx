import {Link} from 'react-router-dom'

export default function Sidebar() {
  return (
    <div>
      <div className="flex justify-between items-center md:block px-8 py-3 font-bold md:border md:border-gray-400  md:rounded-br-3xl rounded-tr-2xl h-full w-max">
              <Link to={"/"}>
              <div className="flex items-center md:mb-10 md:pt-4">
          <img src="/assets/tv.png" alt="logo" className="w-10" />
          <h1 className="ml-2"> Movie Box</h1>
                  </div>
              </Link>
        <div className="flex md:block text-gray-400">
          <Link to={"/"}>
            <div className="items-center flex md:mb-10">
              <img
                src="/assets/home.png"
                alt="home"
                className="w-7 ml-3 md:ml-0 md:w-10"
              />
              <p className="hidden md:flex ml-2">Home</p>
            </div>
          </Link>
          <Link to={"/"}>
            <div className="items-center flex md:mb-10">
              <img
                src="/assets/movie.png"
                alt="home"
                className="w-6 ml-3 md:ml-1 md:w-8"
              />
              <p className="hidden md:flex ml-3">Movies</p>
            </div>
          </Link>
         <Link to={"/"}> <div className="items-center flex md:mb-10">
            <img
              src="/assets/show.png"
              alt="home"
              className="w-7 ml-3 md:ml-0 md:w-10"
            />
            <p className="hidden md:flex ml-2">TV Series</p>
          </div></Link>
         <Link to={"/"}> <div className="items-center flex md:mb-10">
            <img
              src="/assets/calendar.png"
              alt="home"
              className="w-7 ml-3 md:ml-0 md:w-10"
            />
            <p className="hidden md:flex ml-2">Upcoming</p>
          </div></Link>
          <div className="hidden md:block bg-movieRed bg-opacity-10 rounded-lg w-44 p-3 border border-movieRed mb-4 mt-4 mb-10">
            <p className="text-black">
              Play movie quizzes and earn free tickets
            </p>
            <p className="text-xs mt-2 ">50k people are playing now</p>
            <button className="bg-movieRed bg-opacity-10 text-sm border border-movieRed first-line:text-movieRed rounded-full px-2 py-1 mt-2">
              Start playing
            </button>
          </div>

         <Link to={"/"}> <div className="items-center flex">
            <img
              src="/assets/logout.png"
              alt="home"
              className="w-7 ml-3 md:ml-0 md:w-10"
            />
            <p className="hidden md:flex ml-2">Logout</p>
          </div></Link>
        </div>
      </div>
    </div>
  );
}