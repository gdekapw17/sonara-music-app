import { useSelector, useDispatch } from "react-redux";
import { Error, Loader, SongCard } from "../components";
import { genres } from "../assets/constants";
import { useGetSongsByGenreQuery } from "../redux/services/deezerApi";
import { selectGenreListId } from "../redux/features/playerSlice";

const Discover = () => {
  const { isPlaying, activeSong, genreListId } = useSelector(
    (state) => state.player
  );
  const dispatch = useDispatch();
  const { data, isFetching, error } = useGetSongsByGenreQuery(
    genreListId || "132"
  );
  const songs = data?.data;
  const genreTitle =
    genres.find((genre) => genre.value === genreListId)?.title || "Pop";

  if (isFetching) return <Loader title="Loading Songs..." />;
  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-8">
        <h2 className="font-bold text-white text-3xl">Discover {genreTitle}</h2>
        <select
          onChange={(e) => {
            dispatch(selectGenreListId(e.target.value));
          }}
          value={genreListId}
          className="bg-gray-900 text-gray-300 text-sm rounded-lg outline-none p-3 sm:mt-0 mt-5"
        >
          {genres.map((genre) => (
            <option key={genre.value} value={genre.value}>
              {genre.title}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
        {songs?.map((song, index) => (
          <SongCard
            song={song}
            i={index}
            key={song.id}
            isPlaying={isPlaying}
            activeSong={activeSong}
            songs={songs}
          />
        ))}
      </div>
    </div>
  );
};

export default Discover;
