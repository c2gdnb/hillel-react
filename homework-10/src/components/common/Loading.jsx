import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

function Loading() {
  return (
    <Box sx={{ display: "flex" }}>
      <CircularProgress
        sx={{
          position: "absolute",
          top: "0",
          left: "0",
          right: "0",
          bottom: "0",
          margin: "auto",
        }}
      />
    </Box>
  );
}

export default Loading;
