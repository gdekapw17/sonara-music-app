import { useGetTopChartsQuery } from "../redux/services/deezerApi";
import { Loader, Error } from "../components";
import { Link } from "react-router-dom";

const TopArtists = () => {
  const { data, isFetching, error } = useGetTopChartsQuery(15);
  const artists = data?.artists.data;

  if (isFetching) return <Loader title="Loading artists..." />;
  if (error) return <Error />;

  return (
    <div className="flex flex-col items-center lg:items-start">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
        Top Artists
      </h2>

      {artists?.map((artist, i) => (
        <div className="w-full flex items-center justify-between hover:bg-[#4c426e] py-2 p-4 rounded-lg cursor-pointer mb-2 animate-slideup xl:animate-none">
          <h3 className="font-bold text-white text-base mr-3">{i + 1}.</h3>
          <div className="flex-1 flex gap-2 items-center">
            <img
              src={artist?.picture_big}
              alt="artist-cover"
              className="h-20 w-20 rounded-lg"
            />
            <div className="flex-1 flex flex-col justify-center mx-3 max-w-full">
              <Link to={`/artists/${artist.id}`}>
                <p className="text-lg font-bold text-white truncate">
                  {artist?.name}
                </p>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopArtists;
