import { useParams } from "react-router-dom";
import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";
import {
  useGetArtistDetailsQuery,
  useGetArtistTopTracksQuery,
  useGetAlbumDetailsQuery,
} from "../redux/services/deezerApi";

const ArtistDetails = () => {
  const { artistid } = useParams();

  const {
    data: artistData,
    isFetching: isFetchingArtistDetails,
    error: artistError,
  } = useGetArtistDetailsQuery(artistid);

  const {
    data: relatedSongsData,
    isFetching: isFetchingRelatedSongs,
    error: relatedSongsError,
  } = useGetArtistTopTracksQuery({ artistId: artistid, limit: 10 });

  const albumId = relatedSongsData?.data?.[0]?.album?.id;

  const { data: albumData, isFetching: isFetchingAlbumDetails } =
    useGetAlbumDetailsQuery(albumId, {
      skip: !albumId,
    });

  if (
    isFetchingArtistDetails ||
    isFetchingRelatedSongs ||
    isFetchingAlbumDetails
  )
    return <Loader title="Searching for artist details.." />;

  if (artistError || relatedSongsError) return <Error />;

  return (
    <div className="flex flex-col">
      <DetailsHeader artistData={artistData} albumData={albumData} />

      <RelatedSongs data={relatedSongsData?.data} />
    </div>
  );
};

export default ArtistDetails;
