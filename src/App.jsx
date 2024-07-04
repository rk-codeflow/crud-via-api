import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import { Button, Stack, Typography } from "@mui/material";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Stack
      direction="row"
      justifyContent={"space-between"}
      alignItems={"center"}
      maxWidth={600}
    >
      <Typography variant="h5">Users</Typography>
      <Button variant="contained" color="primary">
        Details{" "}
      </Button>
    </Stack>
  );
}

export default App;
