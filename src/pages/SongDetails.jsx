import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";
import { setActiveSong, playPause } from "../redux/features/playerSlice";
import {
  useGetSongDetailsQuery,
  useGetAlbumDetailsQuery,
  useGetArtistTopTracksQuery,
} from "../redux/services/deezerApi";
import { useGetLyricsQuery } from "../redux/services/musixMatchApi";

const SongDetails = () => {
  const dispatch = useDispatch();
  const { songid } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };
  const handlePlayClick = (song, i) => {
    dispatch(setActiveSong({ song, songs: combinedPlaylist, i }));
    dispatch(playPause(true));
  };

  const {
    data: songData,
    isFetching: isFetchingSongDetails,
    error: songError,
  } = useGetSongDetailsQuery(songid);
  const songTitle = songData?.title
    ?.toLowerCase()
    .replace(/['’]/g, "")
    .replace(/ *\([^)]*\) */g, "")
    .trim();
  const songArtist = songData?.artist?.name
    ?.toLowerCase()
    .split("feat.")[0]
    .trim();
  const albumId = songData?.album?.id;
  const artistId = songData?.artist?.id;

  const {
    data: lyricsData,
    isFetching: isFetchingLyrics,
    error: lyricsError,
  } = useGetLyricsQuery(
    {
      artist: songArtist,
      title: songTitle,
    },
    { skip: !songData }
  );

  const { data: albumData } = useGetAlbumDetailsQuery(albumId, {
    skip: !albumId,
  });

  const {
    data: relatedSongsData,
    isFetching: isFetchingRelatedSongs,
    error: relatedSongsError,
  } = useGetArtistTopTracksQuery(
    { artistId, limit: 5 },
    {
      skip: !artistId,
    }
  );

  const combinedPlaylist =
    songData && relatedSongsData?.data
      ? [songData, ...relatedSongsData.data]
      : [];

  if (isFetchingSongDetails || isFetchingLyrics || isFetchingRelatedSongs)
    return <Loader title="Searching for song details.." />;
  if (songError || relatedSongsError) return <Error />;

  return (
    <div className="flex flex-col">
      <DetailsHeader
        handlePlayClick={() => handlePlayClick(songData, 0)}
        handlePauseClick={handlePauseClick}
        songData={songData}
        albumData={albumData}
        activeSong={activeSong}
        isPlaying={isPlaying}
      />

      <div className="mb-5">
        <h2 className="text-white text-3xl font-bold">Lyrics: </h2>
        <div className="mt-5">
          {lyricsError || !lyricsData || lyricsData.length === 0 ? (
            <p className="text-gray-200 text-base my-1">
              Maaf, lirik untuk lagu ini tidak ditemukan.
            </p>
          ) : (
            lyricsData.map((line, i) => (
              <p
                key={`lyrics-${line.time.total}-${i}`}
                className="text-gray-200 text-base my-1"
              >
                {line.text || "\u00A0"}
              </p>
            ))
          )}
        </div>
      </div>

      <RelatedSongs
        data={relatedSongsData?.data}
        isPlaying={isPlaying}
        activeSong={activeSong}
        handlePauseClick={handlePauseClick}
        handlePlayClick={(song, i) => handlePlayClick(song, i + 1)}
      />
    </div>
  );
};

export default SongDetails;
