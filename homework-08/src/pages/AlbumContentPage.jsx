import { useParams } from "react-router-dom";
import { useAlbum } from "../hooks/useAlbum";
import PhotosList from "../components/Albums/PhotosList/PhotosList";
import Loading from "../components/common/Loading";
import Typography from "@mui/material/Typography";

function AlbumContentPage() {
  const { albumId } = useParams();
  const { photos, isLoading } = useAlbum(albumId);
  
  return (
    <>
      <Typography variant="h2" component="h1" gutterBottom>
        Album content
      </Typography>
      {isLoading ? <Loading /> : <PhotosList list={photos} />}
    </>
  );
}

export default AlbumContentPage;
