import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { Error, Loader, SongCard } from "../components";
import { useGetSongsBySearchQuery } from "../redux/services/deezerApi";

const Search = () => {
  const { searchTerm } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetSongsBySearchQuery(searchTerm);

  const songs = data?.data;

  if (isFetching) return <Loader title={`Looking for ${searchTerm}...`} />;
  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
        Show results for <span className="font-black">{searchTerm}</span>
      </h2>

      <div className="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
        {songs?.map((song, i) => (
          <SongCard
            key={song.id}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            songs={songs}
            i={i}
          />
        ))}
      </div>
    </div>
  );
};

export default Search;
