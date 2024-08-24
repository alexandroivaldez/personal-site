import { Button, Stack, Typography } from "@mui/material";
import React from "react";

const Header: React.FC = () => {
  return (
    <Stack
      sx={{ backgroundColor: "#F8F6F2" }}
      direction="row"
      alignItems={"center"}
      justifyContent={"space-between"}
      padding={2}
    >
      <Typography variant="h4">{`< AV />`}</Typography>
      <Stack direction="row" spacing={4}>
        <Typography variant="h6">About</Typography>
        <Typography variant="h6">Work</Typography>
        <Typography variant="h6">Contact</Typography>
      </Stack>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#4F3FEC",
          padding: "10px 20px",
          borderRadius: "15px",
        }}
      >
        Contact
      </Button>
    </Stack>
  );
};

export default Header;
