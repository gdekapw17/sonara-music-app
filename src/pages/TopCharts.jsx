import { useSelector, useDispatch } from "react-redux";
import { playPause, setActiveSong } from "../redux/features/playerSlice";
import { useGetTopChartsQuery } from "../redux/services/deezerApi";
import { Loader, Error } from "../components";
import { SongBar } from "../components";

const TopCharts = () => {
  const { data, isFetching, error } = useGetTopChartsQuery(15);
  const dispatch = useDispatch();
  const { isPlaying, activeSong } = useSelector((state) => state.player);
  const songs = data?.tracks.data;

  const handlePlayClick = (song, i) => {
    dispatch(playPause(false));
    dispatch(setActiveSong({ song, songs, i }));
  };
  const handlePauseClick = () => {
    dispatch(playPause(true));
  };

  if (isFetching) return <Loader title="Loading songs..." />;
  if (error) return <Error />;

  return (
    <div className="flex flex-col items-center lg:items-start">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
        Top Charts
      </h2>

      <div className="mt-4 flex flex-col gap-1 w-full">
        {songs?.map((song, i) => (
          <SongBar
            song={song}
            i={i}
            key={song.title}
            activeSong={activeSong}
            isPlaying={isPlaying}
            handlePauseClick={handlePauseClick}
            handlePlayClick={() => handlePlayClick(song, i)}
          />
        ))}
      </div>
    </div>
  );
};

export default TopCharts;
