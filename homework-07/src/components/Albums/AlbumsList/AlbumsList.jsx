import { ALBUMS_URI } from "../../../constants";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getContactsList } from "../../../services/service";
import AlbumsListItem from "../AlbumsListItem/AlbumsListItem";
import homeIcon from "../../../assets/home.png";

function AlbumsList() {
  const [albums, setUsers] = useState([]);

  useEffect(() => {
    getContactsList(ALBUMS_URI).then((data) => {
      setUsers(data);
    });
  }, []);
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
