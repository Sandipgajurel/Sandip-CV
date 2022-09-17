import React from "react";
import { Box } from "@mui/system";
import "../App.css";
import img from "../img/2.jpg";
import reactimg from "../img/3.png";
import SchoolIcon from "@mui/icons-material/School";
import Card from "@mui/material/Card";
import { CardActionArea } from "@mui/material";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import Footer from "./Footer";
import ComputerIcon from "@mui/icons-material/Computer";
import Rating from "@mui/material/Rating";
import Contact from "./Contact";
import Projects from "./Projects";
import BackToTopButton from "./BackToTopButton";
import Header from "./header";
import {
  BlinkingCursorTextBuilder,
  FloatingLettersTextBuilder,
} from "react-animated-text-builders";
import Experience from "./Experience";
import Education from "./Education";
import Skills from "./Skills";

function Mainpage() {
  return (
    <>
      <div className="App" style={{ backgroundColor: "#cfd1d0" }}>
        {/* <ButtonAppBar /> */}
        <Header />
        {/* <Appbar /> */}
        <div>
          <div>
            <Box
              component="img"
              sx={{
                height: 190,
                width: 195,
                borderRadius: 150,
                float: "right",
                marginRight: "20px",
                marginTop: "20px",
                border: "4px solid #fff",
                boxShadow: "0px 2px 5px #ccc",
              }}
              alt=""
              src={img}
            />
            <h1
              style={{
                textAlign: "left",
                paddingLeft: "50px",
                paddingTop: "90px",
                fontStyle: "italic",
                fontSize: "50px",
                backgroundColor: "black",
                marginTop: "90px",
                color: "white",
                paddingBottom: "70px",
              }}
            >
              Sandip Gajurel
            </h1>
          </div>
          <div
            style={{
              backgroundColor: "black",
              marginTop: "-38px",
              paddingBottom: "30px",
            }}
          >
            <Box
              style={{
                marginLeft: "10px",
                height: "auto",
                marginRight: "10px",
                paddingTop: "5px",
                borderRadius: "20px",
                backgroundColor: `#74EBD5`,
                backgroundImage: `linear-gradient(90deg, #74EBD5 0%, #9FACE6 100%)`,

                boxShadow: `5px 5px 37px 13px rgba(24,29,122,1)`,
                webkitBoxShadow: ` 5px 5px 37px 13px rgba(24,29,122,1)`,
                mozBoxShadow: ` 5px 5px 37px 0px rgba(24,29,122,1)`,
              }}
            >
              <BlinkingCursorTextBuilder
                textStyle={{
                  background: `-webkit-linear-gradient(to right, #bd0000, #0637cb)`,
                  background: `linear-gradient(to right, #bd0000, #0637cb)`,
                  webkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                  paddingTop: "5px",
                  fontWeight: "bold",
                  fontStyle: "italic",
                  fontSize: "24px",
                  paddingLeft: "5px",
                  paddingRight: "5px",
                }}
                style={{
                  transform: "rotate(0deg)",
                  //marginTop: "10px",
                  marginRight: "5px",
                  marginLeft: "5px",
                  paddingBottom: "10px",
                }}
                //cursorComponent={<div style={{color: "Highlight", fontStyle: "italic"}}> Easy to use!</div>}
                //blinkTimeAfterFinish={0}
              >
                " Being work dedicated and hardworking individual, executing
                tasks independently and in a group is my foremost strength. I
                wish to work in a dynamic organization where I can contribute to
                the team there by sharping my own skills in the information
                technology which will surely payback to the society and nation."
              </BlinkingCursorTextBuilder>
            </Box>
          </div>
        </div>

        <Experience />
        <Education />
        <Projects />
        <Skills />
        <Contact />
        <BackToTopButton />
        <Footer />
      </div>
    </>
  );
}

export default Mainpage;
