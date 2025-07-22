import { Link } from "react-router-dom";

import PlayPause from "./PlayPause";

const SongBar = ({
  song,
  i,
  activeSong,
  isPlaying,
  handlePauseClick,
  handlePlayClick,
}) => (
  <div className="w-full flex items-center justify-between hover:bg-[#4c426e] py-2 p-4 rounded-lg cursor-pointer mb-2 animate-slideup xl:animate-none">
    <h3 className="font-bold text-white text-base mr-3">{i + 1}.</h3>
    <div className="flex-1 flex gap-2 items-center">
      <img
        src={song?.album.cover_medium}
        alt="song-cover"
        className="h-20 w-20 rounded-lg"
      />
      <div className="flex-1 flex flex-col justify-center mx-3 max-w-[100px] xl:max-w-[150px]">
        <Link to={`/songs/${song.id}`}>
          <p className="text-lg font-bold text-white truncate">{song?.title}</p>
        </Link>
        <Link to={`/artists/${song.artist.id}`}>
          <p className="text-base text-gray-300 mt-1">{song?.artist.name}</p>
        </Link>
      </div>
    </div>
    {handlePlayClick && (
      <PlayPause
        isPlaying={isPlaying}
        activeSong={activeSong}
        song={song}
        handlePause={handlePauseClick}
        handlePlay={() => handlePlayClick(song, i)}
      />
    )}
  </div>
);

export default SongBar;
