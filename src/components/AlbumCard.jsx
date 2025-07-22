import { Link } from "react-router-dom";

const AlbumCard = ({ album }) => (
  <div className="flex flex-col p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
    <Link to={`/albums/${album.id}`}>
      <div className="relative w-full aspect-square group">
        <img
          src={album.cover_big}
          alt="album_cover"
          className="w-full h-full rounded-lg object-cover"
        />
      </div>
      <div className="mt-4 flex flex-col">
        <p className="font-semibold text-lg text-white truncate">
          {album.title}
        </p>
        <p className="text-sm truncate text-gray-300 mt-1">
          {album.artist.name}
        </p>
      </div>
    </Link>
  </div>
);

export default AlbumCard;
