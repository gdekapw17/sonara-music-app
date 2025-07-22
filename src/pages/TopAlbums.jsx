import React from "react";
import { Error, Loader } from "../components";
import { useGetTopChartsQuery } from "../redux/services/deezerApi";
import AlbumCard from "../components/AlbumCard";

const TopAlbums = () => {
  const { data, isFetching, error } = useGetTopChartsQuery(10);

  if (isFetching) return <Loader title="Memuat album teratas..." />;
  if (error) return <Error />;

  const albums = data?.albums?.data;

  return (
    <div className="flex flex-col items-center lg:items-start">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
        Top Albums
      </h2>

      <div className="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
        {albums?.map((album) => (
          <AlbumCard key={album.id} album={album} />
        ))}
      </div>
    </div>
  );
};

export default TopAlbums;
