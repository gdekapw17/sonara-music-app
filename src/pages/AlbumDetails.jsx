import React from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { DetailsHeader, Error, Loader, SongBar } from "../components";
import { useGetAlbumDetailsQuery } from "../redux/services/deezerApi";
import { playPause, setActiveSong } from "../redux/features/playerSlice";

const AlbumDetails = () => {
  const { albumid } = useParams();
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const {
    data: albumData,
    isFetching: isFetchingAlbumDetails,
    error,
  } = useGetAlbumDetailsQuery(albumid);

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = (song, i) => {
    dispatch(setActiveSong({ song, songs: albumData?.tracks?.data, i }));
    dispatch(playPause(true));
  };

  if (isFetchingAlbumDetails) return <Loader title="Memuat detail album..." />;
  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <DetailsHeader
        artistData={{
          name: albumData?.title,
          picture_big: albumData?.cover_big,
        }}
        albumData={albumData}
      />

      <h1 className="font-bold text-3xl text-white">Album Songs:</h1>
      <div className="mt-10">
        {albumData?.tracks?.data?.map((song, i) => (
          <SongBar
            key={song.id}
            song={song}
            i={i}
            isPlaying={isPlaying}
            activeSong={activeSong}
            handlePauseClick={handlePauseClick}
            handlePlayClick={handlePlayClick}
          />
        ))}
      </div>
    </div>
  );
};

export default AlbumDetails;
