import AlbumListItem from "../AlbumListItem/AlbumListItem";
import List from "@mui/material/List";
import Box from '@mui/material/Box';

function AlbumsList({ list }) {
  return (
    <Box>
      <List component="nav">
        {list.map((album) => (
          <AlbumListItem key={album.id} item={album} />
        ))}
      </List>
    </Box>
  );
}

export default AlbumsList;
