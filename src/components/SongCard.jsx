import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import PlayPause from "./PlayPause";
import { playPause, setActiveSong } from "../redux/features/playerSlice";

const SongCard = ({ songs, song, i, activeSong, isPlaying }) => {
  const dispatch = useDispatch();
  const handlePauseClick = () => {
    dispatch(playPause(false));
  };
  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, songs, i }));
    dispatch(playPause(true));
  };

  return (
    <div className="p-4 bg-white/10 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
      <div className="relative w-full h-auto group">
        <div
          className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${
            activeSong?.title === song.title
              ? `flex bg-black bg-opacity-70`
              : `hidden`
          }`}
        >
          <PlayPause
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            handlePause={handlePauseClick}
            handlePlay={handlePlayClick}
          />
        </div>
        <img src={song.album.cover_big} alt="song-img" />
      </div>

      <div className="flex flex-col mt-4">
        <p className="font-semibold text-white text-lg truncate">
          <Link to={`/songs/${song.id}`}>{song?.title}</Link>
        </p>
        <p className="truncate text-sm text-gray-300 mt-1">
          <Link to={`/artists/${song.artist.id}`}>{song?.artist.name}</Link>
        </p>
      </div>
    </div>
  );
};

export default SongCard;
