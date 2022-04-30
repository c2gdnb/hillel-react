import Loading from "../common/Loading";
import AlbumsList from "./AlbumsList/AlbumsList";
import useAlbums from "../../hooks/useAlbums";
import Typography from "@mui/material/Typography";

function Albums() {
  const { albums, isLoading } = useAlbums();

  return (
    <>
      <Typography variant="h2" component="h1" gutterBottom>
        Albums
      </Typography>
      {isLoading ? <Loading /> : <AlbumsList list={albums} />}
    </>
  );
}

export default Albums;
