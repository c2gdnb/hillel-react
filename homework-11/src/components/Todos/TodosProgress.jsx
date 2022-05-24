import { CircularProgress } from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function TodosProgress({ todos }) {
  let count = 0;

  todos.forEach((value) => {
    if (value.status === true) {
      count++;
    }
  });

  let percentageTodos = (count / todos.length) * 100;

  if (isNaN(percentageTodos)) {
    percentageTodos = 0;
  }

  return (
    <Box
      sx={{
        p: "24px",
        borderRadius: "10px",
        backgroundColor: "#e4faf6",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box sx={{ position: "relative", display: "inline-flex" }}>
        <CircularProgress
          variant="determinate"
          value={percentageTodos}
          size={200}
          color={"success"}
        />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="caption"
            component="div"
            sx={{ fontSize: "44px" }}
          >
            {`${Math.round(percentageTodos)}%`}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
