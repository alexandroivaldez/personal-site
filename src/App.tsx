import "./App.css";
import { Button, Container, Fade, Stack, Typography } from "@mui/material";
import picture1 from "./assets/picture1.png";
import page1 from "./assets/623458bbba9cc02c42f14fd8_Woven-p-800.png";
import page2 from "./assets/623458bbba9cc09c65f14fd9_EatCoast-p-800.png";
import page3 from "./assets/623458bbd4aa352a594a98a1_Clockwork-p-500.png";
import page4 from "./assets/623458bc117f375553808b12_FexSpace-p-500.png";
import topDivider from "./assets/622a38f27a2b2c76656d9fa2_Separator-1.svg";
import bottomDivider from "./assets/622a44f61394f541256dbd0a_Separator-top.svg";
import { Icon } from "@iconify/react";
import MyForm from "./components/MyForm";
import Header from "./components/Header";

function App() {
  return (
    <Fade in={true} timeout={2000}>
      <Container
        sx={{ border: "1px solid red" }}
        maxWidth={"xl"}
        disableGutters
      >
        <Header />

        <Stack
          direction={"row"}
          sx={{
            padding: 2,
            backgroundColor: "#F8F6F2",
          }}
        >
          <Stack
            direction={"column"}
            justifyContent="center"
            alignItems={"flex-start"}
            width={"100%"}
            sx={{ width: "100%" }}
            spacing={1}
          >
            <Typography variant="h3" fontFamily="new-amsterdam-regular">
              Hello, my name is Alexandro Valdez.
            </Typography>
            <Typography variant="h5">
              Creative. Software developer. Based in Houston, Texas.
            </Typography>
            <Typography variant="h6">
              I focus on creating elegant digital solutions with an emphasis on
              functionality and design. Whether it's a website, automated
              script, cloud or AI integration, I'm your guy.
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#4F3FEC",
                padding: "15px 60px",
                borderRadius: "15px",
              }}
            >
              Contact
            </Button>
          </Stack>
          <Stack sx={{ width: "100%" }} justifyContent="center">
            <img src={picture1} width={"100%"} />
          </Stack>
        </Stack>

        <img src={topDivider} width={"100%"} />
        <Stack
          direction={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          sx={{ padding: 2 }}
        >
          <Typography variant="h2">About Me</Typography>
          <Typography variant="h5" color={"grey"}>
            Since graduating with my Bachelors in Computer Science I've worn
            different hats all focused on software development.
          </Typography>
          <Stack direction={"row"} spacing={2} sx={{}}>
            <Stack
              direction={"column"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <img src={picture1} width={"90%"} />
              <Typography variant={"h6"}>Software Developer</Typography>
              <Typography>
                I'm a professional full stack developer building production
                grade applications using React, MongoDB, AWS and more!
              </Typography>
            </Stack>
            <Stack
              direction={"column"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <img src={picture1} width={"90%"} />
              <Typography variant={"h6"}>Developer Advocate</Typography>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Typography>
            </Stack>
            <Stack
              direction={"column"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <img src={picture1} width={"90%"} />
              <Typography variant={"h6"}>Instructor</Typography>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Typography>
            </Stack>
            <Stack
              direction={"column"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <img src={picture1} width={"90%"} />
              <Typography variant={"h6"}>Traveler</Typography>
              <Typography></Typography>
            </Stack>
          </Stack>
        </Stack>
        <img src={bottomDivider} width={"90%"} />
        <Stack
          direction={"column"}
          sx={{ backgroundColor: "#F8F6F2", padding: 2 }}
        >
          <Stack direction={"column"} alignItems={"center"}>
            <Typography variant="h2">Work</Typography>
            <Typography variant="h5" color={"grey"}>
              Here are a few projects that I've worked on that showcase my
              skills.
            </Typography>
          </Stack>
          <Stack direction={"row"} spacing={2} padding={2}>
            <Stack direction={"column"} sx={{ width: "55%" }}>
              <img
                src={page1}
                className="zoomable-image"
                width={"100%"}
                style={{
                  borderRadius: "15px",
                  height: "400px",
                  objectFit: "cover",
                }}
              />
              <Typography variant="h5">StudySpace</Typography>
              <Typography variant="h6" color={"grey"}>
                When I was an instructor I realized that a huge issue with
                education is that students don't know how to study! This was my
                solution to provide students a space for learning how to code.
              </Typography>
            </Stack>
            <Stack direction={"column"} sx={{ width: "45%" }}>
              <img
                src={page2}
                className="zoomable-image"
                width={"100%"}
                style={{
                  borderRadius: "15px",
                  height: "400px",
                  objectFit: "cover",
                }}
              />
              <Typography variant="h5">Card Fight AI</Typography>
              <Typography variant="h6" color={"grey"}>
                Inspired by SuperFight, this online variant shows the players
                the visual representation of their combinations by extending
                Stable Diffusion XL.
              </Typography>
            </Stack>
          </Stack>
          <Stack direction={"row"} spacing={2}>
            <Stack direction={"column"} sx={{ width: "45%", padding: 2 }}>
              <img
                src={page4}
                className="zoomable-image"
                width={"100%"}
                style={{
                  borderRadius: "15px",
                  height: "400px",
                  objectFit: "cover",
                }}
              />
              <Typography variant="h5">The Sporting Camp</Typography>
              <Typography variant="h6" color={"grey"}>
                Built for a hunting ranch in Texas. Live feed of game camera at
                the ranch.
              </Typography>
            </Stack>
            <Stack direction={"column"} sx={{ width: "55%", padding: 2 }}>
              <img
                src={page3}
                className="zoomable-image"
                width={"100%"}
                style={{
                  borderRadius: "15px",
                  height: "400px",
                  objectFit: "cover",
                }}
              />
              <Typography variant="h5">Header</Typography>
              <Typography variant="h6" color={"grey"}>
                Website
              </Typography>
            </Stack>
          </Stack>
        </Stack>
        <img src={topDivider} width={"100%"} />
        <Stack
          justifyContent="center"
          alignItems={"center"}
          direction={"row"}
          sx={{}}
        >
          <img src={picture1} width={"50%"} />

          <MyForm />
        </Stack>
        <img src={bottomDivider} width={"100%"} />
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          sx={{ padding: 2, backgroundColor: "#F8F6F2" }}
        >
          <Typography>Designed by Alexandro Valdez 2024</Typography>
          <Stack direction={"row"} spacing={2}>
            <Icon icon="ri:github-fill" width="24" height="24" />
            <Icon icon="mdi:linkedin" width="24" height="24" />
            <Icon icon="pajamas:twitter" width="24" height="24" />
            <Icon icon="mdi:instagram" width="24" height="24" />
          </Stack>
        </Stack>
      </Container>
    </Fade>
  );
}

export default App;
