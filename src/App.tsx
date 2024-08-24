import "./App.css";
import { Button, Container, Fade, Stack, Typography } from "@mui/material";
import picture1 from "./assets/picture1.png";
import page1 from "./assets/623458bbba9cc02c42f14fd8_Woven-p-800.png";
import page2 from "./assets/623458bbba9cc09c65f14fd9_EatCoast-p-800.png";
import page3 from "./assets/623458bbd4aa352a594a98a1_Clockwork-p-500.png";
import page4 from "./assets/623458bc117f375553808b12_FexSpace-p-500.png";
import topDivider from "./assets/622a38f27a2b2c76656d9fa2_Separator-1.svg";
import bottomDivider from "./assets/622a44f61394f541256dbd0a_Separator-top.svg";

import MyForm from "./components/MyForm";

function App() {
  return (
    <Container
      sx={{ border: "1px solid red" }}
      maxWidth={"xl"}
      disableGutters
    >
      <Stack
        sx={{ border: "1px solid red", backgroundColor: "#F8F6F2" }}
        direction="row"
        alignItems={"center"}
        justifyContent={"space-between"}
        padding={1}
      >
        <Typography variant="h4">{`< AV />`}</Typography>
        <Stack direction="row" spacing={4}>
          <Typography>About</Typography>
          <Typography>Work</Typography>
          <Typography>Contact</Typography>
        </Stack>
        <Button variant="contained">Contact</Button>
      </Stack>
      <Fade in={true} timeout={2000}>
        <Stack
          direction={"row"}
          sx={{
            border: "1px solid blue",
            padding: 1,
            backgroundColor: "#F8F6F2",
          }}
        >
          <Stack
            direction={"column"}
            justifyContent="center"
            alignItems={"flex-start"}
            width={"100%"}
            sx={{ width: "100%", border: "1px solid orange" }}
            spacing={1}
          >
            <Typography variant="h3">
              Hello, my name is Alexandro Valdez.
            </Typography>
            <Typography variant="h5">
              Software developer. Autodidact. Always Available.
            </Typography>
            <Typography variant="h5">
              I focus on creating elegant digital solutions with an emphasis on
              functionality and design.
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
      </Fade>
      <img src={topDivider} width={"100%"} />
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
      <img src={bottomDivider} width={"100%"} />
      <Stack
        direction={"column"}
        sx={{ border: "1px solid blue", backgroundColor: "#F8F6F2" }}
      >
        <Fade in={true} timeout={2000}>
          <Stack direction={"row"} spacing={2} padding={2}>
            <Stack
              direction={"column"}
              sx={{ border: "1px solid red", width: "55%" }}
            >
              <img
                src={page1}
                width={"100%"}
                style={{
                  borderRadius: "15px",
                  height: "400px",
                  objectFit: "cover",
                }}
              />
              <Typography>Header</Typography>
              <Typography>Website</Typography>
            </Stack>
            <Stack
              direction={"column"}
              sx={{ border: "1px solid red", width: "45%" }}
            >
              <img
                src={page2}
                width={"100%"}
                style={{
                  borderRadius: "15px",
                  height: "400px",
                  objectFit: "cover",
                }}
              />
              <Typography>Header</Typography>
              <Typography>Website</Typography>
            </Stack>
          </Stack>
        </Fade>
        <Stack direction={"row"} spacing={2}>
          <Stack
            direction={"column"}
            sx={{ border: "1px solid red", width: "45%", padding: 2 }}
          >
            <img
              src={page4}
              width={"100%"}
              style={{
                borderRadius: "15px",
                height: "400px",
                objectFit: "cover",
              }}
            />
            <Typography>Header</Typography>
            <Typography>Website</Typography>
          </Stack>
          <Stack
            direction={"column"}
            sx={{ border: "1px solid red", width: "55%", padding: 2 }}
          >
            <img
              src={page3}
              width={"100%"}
              style={{
                borderRadius: "15px",
                height: "400px",
                objectFit: "cover",
              }}
            />
            <Typography>Header</Typography>
            <Typography>Website</Typography>
          </Stack>
        </Stack>
      </Stack>
      <img src={topDivider} width={"100%"} />
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
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        sx={{ padding: 2 }}
      >
        <Typography>Designed by Alexandro Valdez 2024</Typography>
        <Stack direction={"row"} spacing={2}>
          <p>x</p>
          <p>x</p>
          <p>x</p>
          <p>x</p>
        </Stack>
      </Stack>
    </Container>
  );
}

export default App;
