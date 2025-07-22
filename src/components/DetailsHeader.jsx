import { Link } from "react-router-dom";
import PlayPause from "./PlayPause";

const DetailsHeader = ({
  handlePlayClick,
  handlePauseClick,
  isPlaying,
  activeSong,
  songData,
  albumData,
  artistData,
}) => (
  <div className="relative w-full flex flex-col mb-10">
    <div className="w-full bg-gradient-to-l from-transparent to-purple-500 h-28 rounded-lg" />
    <div className="absolute inset-0 flex items-start lg:items-center justify-center lg:justify-start flex-col gap-5 lg:flex-row mt-10 lg:mt-0">
      <div className="relative w-32 lg:w-28 h-32 lg:h-28 flex-shrink-0 group">
        <img
          src={songData ? songData?.album.cover_big : artistData?.picture_big}
          alt="art"
          className="w-full h-full rounded-full object-cover border-2"
        />
        {songData && (
          <div
            className={`absolute inset-0 w-full h-full rounded-full bg-black bg-opacity-50 group-hover:flex items-center justify-center cursor-pointer ${
              activeSong?.title === songData?.title && isPlaying
                ? "flex bg-black bg-opacity-70"
                : "hidden"
            }`}
          >
            <PlayPause
              isPlaying={isPlaying}
              activeSong={activeSong}
              song={songData}
              handlePause={handlePauseClick}
              handlePlay={handlePlayClick}
            />
          </div>
        )}
      </div>

      <div className="ml-0 lg:ml-5">
        <div className="font-bold text-white text-3xl xl:text-xl">
          {songData ? songData?.title : artistData?.name}
        </div>
        <Link to={`/artists/${songData?.artist.id}`}>
          <p
            className={`text-gray-200 text-base mt-2 ${
              songData ? "flex" : "hidden"
            }`}
          >
            {songData?.artist.name}
          </p>
        </Link>
        <p className="text-gray-200 text-base mt-2">
          {albumData?.genres.data[0]?.name}
        </p>
      </div>
    </div>
    <div className="w-full h-44 lg:h-24" />
  </div>
);

export default DetailsHeader;
