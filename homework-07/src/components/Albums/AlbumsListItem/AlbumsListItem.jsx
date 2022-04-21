function AlbumsListItem(props) {
  const { album } = props;

  return <div className="cards__item">{album.title}</div>;
}

export default AlbumsListItem;
