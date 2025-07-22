import SongBar from "./SongBar";

const RelatedSongs = ({
  data,
  isPlaying,
  activeSong,
  handlePauseClick,
  handlePlayClick,
}) => (
  <div className={`flex flex-col ${handlePlayClick ? "mt-10" : "mt-0"}`}>
    <h1 className="font-bold text-3xl text-white">
      {handlePlayClick ? "Related Songs:" : "Top Songs:"}
    </h1>

    <div className="mt-6 w-full flex flex-col">
      {data && data.length > 0 ? (
        data.map((song, i) => (
          <SongBar
            key={`${song.id}-${i}`}
            song={song}
            i={i}
            isPlaying={isPlaying}
            activeSong={activeSong}
            handlePauseClick={handlePauseClick}
            handlePlayClick={handlePlayClick}
          />
        ))
      ) : (
        <p className="text-gray-400 text-base my-1">
          Sorry, no related songs found.
        </p>
      )}
    </div>
  </div>
);

export default RelatedSongs;
