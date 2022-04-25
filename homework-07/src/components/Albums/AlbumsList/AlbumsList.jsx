import { Link } from "react-router-dom";
import AlbumsListItem from "../AlbumsListItem/AlbumsListItem";
import homeIcon from "../../../assets/home.png";

function AlbumsList(props) {
  const { albums } = props;

  return (
    <>
      <Link to="/" className="home-link">
        <img src={homeIcon} alt="" />
        Home
      </Link>
      <div className="cards cards--flex">
        {albums.map((album) => (
          <AlbumsListItem key={album.id} album={album} />
        ))}
      </div>
    </>
  );
}

export default AlbumsList;
