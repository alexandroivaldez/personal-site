import "./App.css";
import { Button, Container, Stack, Typography } from "@mui/material";
import picture1 from "./assets/picture1.png";
import MyForm from "./components/MyForm";

function App() {
  return (
    <Container sx={{ border: "1px solid red" }} disableGutters>
      <Stack
        sx={{ border: "1px solid red" }}
        direction="row"
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Typography variant="h2">Logo</Typography>
        <Stack direction="row" spacing={4}>
          <Typography>About</Typography>
          <Typography>Work</Typography>
          <Typography>Contact</Typography>
        </Stack>
        <Button variant="contained">Contact</Button>
      </Stack>
      <Stack direction={"row"} sx={{ border: "1px solid blue" }}>
        <Stack
          direction={"column"}
          justifyContent="center"
          alignContent={"center"}
          width={"100%"}
          sx={{ width: "100%", border: "1px solid orange" }}
        >
          <Typography variant="h2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
          <Typography variant="h5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
          <Typography variant="h5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            convallis mauris purus, et facilisis tellus consectetur eget. Aenean
            tellus purus, placerat sit amet odio at, finibus convallis nulla.
            Morbi ut diam euismod, molestie nisl vel, malesuada mauris.
          </Typography>
          <Button variant="contained">Contact</Button>
        </Stack>
        <Stack
          sx={{ width: "100%", border: "1px solid green" }}
          justifyContent="center"
        >
          <img src={picture1} width={"100%"} />
        </Stack>
      </Stack>
      <Stack
        direction={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        sx={{ border: "1px solid blue" }}
      >
        <Typography variant="h2">How it works</Typography>
        <Typography variant="h5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Typography>
        <Stack direction={"row"} spacing={2}>
          <Stack
            direction={"column"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <img src={picture1} width={"100%"} />
            <Typography variant={"h6"}>Create design request</Typography>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
          </Stack>
          <Stack
            direction={"column"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <img src={picture1} width={"100%"} />
            <Typography variant={"h6"}>Create design request</Typography>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
          </Stack>
          <Stack
            direction={"column"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <img src={picture1} width={"100%"} />
            <Typography variant={"h6"}>Create design request</Typography>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
          </Stack>
          <Stack
            direction={"column"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <img src={picture1} width={"100%"} />
            <Typography variant={"h6"}>Create design request</Typography>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <Stack direction={"column"} sx={{ border: "1px solid blue" }}>
        <Stack direction={"row"}>
          <Stack
            direction={"column"}
            sx={{ border: "1px solid red", width: "55%" }}
          >
            <img src={picture1} width={"100%"} />
            <Typography>Header</Typography>
            <Typography>Website</Typography>
          </Stack>
          <Stack
            direction={"column"}
            sx={{ border: "1px solid red", width: "45%" }}
          >
            <img src={picture1} width={"100%"} />
            <Typography>Header</Typography>
            <Typography>Website</Typography>
          </Stack>
        </Stack>
        <Stack direction={"row"}>
          <Stack
            direction={"column"}
            sx={{ border: "1px solid red", width: "55%" }}
          >
            <img src={picture1} width={"100%"} />
            <Typography>Header</Typography>
            <Typography>Website</Typography>
          </Stack>
          <Stack
            direction={"column"}
            sx={{ border: "1px solid red", width: "45%" }}
          >
            <img src={picture1} width={"100%"} />
            <Typography>Header</Typography>
            <Typography>Website</Typography>
          </Stack>
        </Stack>
      </Stack>
      <Stack
        justifyContent="center"
        alignItems={"center"}
        direction={"column"}
        sx={{ border: "1px solid blue" }}
      >
        <Typography variant="h2">How it works</Typography>
        <Typography variant="h5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Typography>
        <MyForm />
      </Stack>
    </Container>
  );
}

export default App;
