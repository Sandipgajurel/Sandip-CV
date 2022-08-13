import { Box } from "@mui/system";
import React from "react";
import "./App.css";
import ButtonAppBar from "./Container/Navbar";
import img from "./img/2.jpg";
import reactimg from "./img/3.png";
import SchoolIcon from "@mui/icons-material/School";
import Card from "@mui/material/Card";
import { CardActionArea } from "@mui/material";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import Footer from "./Container/Footer";
import ComputerIcon from "@mui/icons-material/Computer";
import Rating from "@mui/material/Rating";
import Contact from "./Container/Contact";
import Projects from "./Container/Projects";
import BackToTopButton from "./Container/BackToTopButton";

function App() {
  return (
    <>
      <div className="App" style={{ backgroundColor: "#cfd1d0" }}>
        <ButtonAppBar />
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
                marginTop:'35px'
              }}
              alt=""
              src={img}
            />
            <h1
              style={{
                textAlign: "left",
                marginLeft: "50px",
                paddingTop: "100px",
                fontStyle: "italic",
                fontSize: "50px",
                
              }}
            >
              Sandip Gajurel
            </h1>
          </div>
          <hr />
          <Box
            style={{
              marginLeft: "10px",
              height: "auto",
              background: `rgb(34,34,84)`,
background: `linear-gradient(90deg, rgba(34,34,84,1) 0%, rgba(40,39,39,1) 100%)`, marginRight: "10px",
              boxShadow: `rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px`,
            }}
          >
            <span
              style={{
                paddingTop: "40px",
                fontWeight: "bold",
                fontSize: "23px",
                fontFamily:'Alumni Sans Pinstripe',
                color:'silver'
              }}
            >
              "Being work dedicated and hardworking individual, executing tasks
              independently and in a group is my foremost strength. I wish to
              work in a dynamic organization where I can contribute to the team
              there by sharping my own skills in the information technology
              which will surely payback to the society and nation."
            </span>
          </Box>
        </div>
        <div
          className="row"
          style={{
            display: "flex",
            height: "400px",
            marginTop: "190px",
            backgroundColor: "black",
            paddingTop: "60px",
          }}
        >
          <div className="column" style={{ flex: "50%", marginTop: "100px" }}>
            <h1 style={{ color: "ButtonShadow" }}>EXPERIENCE</h1>{" "}
            <WorkHistoryIcon style={{ color: "white", fontSize:'50px' }} />
          </div>

          <div className="column" style={{ flex: "50%", marginRight: "10px"}}>
            <Card
              className="shadow-md m2 p3 rounded"
              style={{
                float:'right',
                marginRight:'auto',
                width: "70%",
                background: `rgb(164,164,164)`,
                background: `linear-gradient(90deg, rgba(164,164,164,1) 0%, rgba(225,225,252,1) 100%)`,
              }}
            >
              <CardActionArea style={{ alignItems: "center" }}>
                <img style={{ width: "100%" }} src={reactimg} alt="" />
                <div style={{ textAlign: "center" }}>
                  <h1
                    style={{
                      fontStyle: "italic",
                      color: "black",

                      fontWeight: "bold",
                    }}
                  >
                    React JS Intern
                  </h1>
                  <h3 style={{ color: "black" }}>
                    GrayCode Technology Pvt. Ltd
                  </h3>
                  <h4 style={{ color: "black" }}>
                    September, 2021 - January, 2022
                  </h4>
                </div>
              </CardActionArea>
            </Card>
          </div>
        </div>

        <div
          className="row"
          style={{
            display: "flex",
            height: "auto",
            marginTop: "3px",
            backgroundColor: "black",
            paddingTop: "50px",
            paddingBottom:"30px"
          }}
        >
          <div className="column" style={{ flex: "50%", marginLeft: "15px" }}>
            {/* <h2 style={{color:'white'}}>Islington College</h2>
         <h4 style={{color:'white'}}> Bachelor In Information Technology</h4>
          <h5 style={{color:'white'}} >2019 - 2022</h5> */}
            <Card
              className="shadow-md m2 p3 rounded"
              style={{
                marginRight: "auto",
                marginLeft: "auto",
                display: "flex",
                width: "100%",
                background: `rgb(145,139,139)`,
                background: `linear-gradient(90deg, rgba(145,139,139,1) 0%, rgba(31,31,74,1) 100%)`,
              }}
            >
              <CardActionArea style={{ alignItems: "center" }}>
                <div style={{ textAlign: "center" }}>
                  <h1
                    style={{
                      fontStyle: "italic",
                      color: "black",

                      fontWeight: "bold",
                    }}
                  >
                    Islington College
                  </h1>
                  <h3 style={{ color: "black" }}>
                    Bachelor In Information Technology
                  </h3>
                  <h4 style={{ color: "black" }}>2019 - 2022</h4>
                </div>
              </CardActionArea>
            </Card>
            <hr />

            {/* <h2 style={{color:'white'}}>Rehdon College</h2>
         <h4 style={{color:'white'}}> Higher Secondary Level</h4>
          <h5 style={{color:'white'}} >2017 - 2019</h5> */}

            <Card
              className="shadow-md m2 p3 rounded"
              style={{
                marginRight: "auto",
                marginLeft: "auto",
                display: "flex",
                width: "100%",
                background: `rgb(145,139,139)`,
                background: `linear-gradient(90deg, rgba(145,139,139,1) 0%, rgba(31,31,74,1) 100%)`,
              }}
            >
              <CardActionArea style={{ alignItems: "center" }}>
                <div style={{ textAlign: "center" }}>
                  <h1
                    style={{
                      fontStyle: "italic",
                      color: "black",

                      fontWeight: "bold",
                    }}
                  >
                    Rehdon College
                  </h1>
                  <h3 style={{ color: "black" }}>Higher Secondary Level</h3>
                  <h4 style={{ color: "black" }}>2017 - 2019</h4>
                </div>
              </CardActionArea>
            </Card>

            <hr />
            {/* <h2 style={{color:'white'}}> Tarun Secondary School</h2>
         <h4 style={{color:'white'}}> Secondary Level</h4>
          <h5 style={{color:'white'}} >2005 - 2016</h5> */}

            <Card
              className="shadow-md m2 p3 rounded"
              style={{
                marginRight: "auto",
                marginLeft: "auto",
                display: "flex",
                width: "100%",
                background: `rgb(145,139,139)`,
                background: `linear-gradient(90deg, rgba(145,139,139,1) 0%, rgba(31,31,74,1) 100%)`,
              }}
            >
              <CardActionArea style={{ alignItems: "center" }}>
                <div style={{ textAlign: "center" }}>
                  <h1
                    style={{
                      fontStyle: "italic",
                      color: "black",

                      fontWeight: "bold",
                    }}
                  >
                    Tarun Secondary School
                  </h1>
                  <h3 style={{ color: "black" }}>Secondary Level</h3>
                  <h4 style={{ color: "black" }}>2005 - 2016</h4>
                </div>
              </CardActionArea>
            </Card>
          </div>
          <div className="column" style={{ flex: "50%", marginTop: "160px" }}>
            <h1 style={{ color: "ButtonShadow" }}>EDUCTAION</h1>{" "}
            <SchoolIcon style={{ color: "white", fontSize:'50px'  }} />
          </div>
        </div>

        <Projects />

        <div
          className="row"
          style={{
            display: "flex",
            height: "auto",
            marginTop: "3px",
            backgroundColor: "black",
            paddingTop: "50px",
            paddingBottom:'20px'
          }}
        >
          <div
            className="column"
            style={{ flex: "50%", marginRight: "15px", marginLeft: "50px" }}
          >
            <Box
              style={{
                background: `rgb(145,139,139)`,
                background: `linear-gradient(90deg, rgba(145,139,139,1) 0%, rgba(31,31,74,1) 100%)`,
                boxShadow: `rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px`,
              }}
            >
              <h2 style={{ color: "white" }}>
                HTML/CSS/Java Script{" "}
                <Rating name="size-small" defaultValue={4} />
              </h2>
            </Box>
            <Box
              style={{
                background: `rgb(145,139,139)`,
                background: `linear-gradient(90deg, rgba(145,139,139,1) 0%, rgba(31,31,74,1) 100%)`,
                boxShadow: `rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px`,
              }}
            >
              <h2 style={{ color: "white" }}>
                MySql/MsSql <Rating name="size-small" defaultValue={4} />
              </h2>
            </Box>
            <Box
              style={{
                background: `rgb(145,139,139)`,
                background: `linear-gradient(90deg, rgba(145,139,139,1) 0%, rgba(31,31,74,1) 100%)`,
                boxShadow: `rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px`,
              }}
            >
              <h2 style={{ color: "white" }}>
                Node JS
                <Rating name="size-small" defaultValue={4} />
              </h2>
            </Box>

            <Box
              style={{
                background: `rgb(145,139,139)`,
                background: `linear-gradient(90deg, rgba(145,139,139,1) 0%, rgba(31,31,74,1) 100%)`,
                boxShadow: `rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px`,
              }}
            >
              <h2 style={{ color: "white" }}>
                React JS <Rating name="size-small" defaultValue={4} />
              </h2>
            </Box>
            <Box
              style={{
                background: `rgb(145,139,139)`,
                background: `linear-gradient(90deg, rgba(145,139,139,1) 0%, rgba(31,31,74,1) 100%)`,
                boxShadow: `rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px`,
              }}
            >
              <h2 style={{ color: "white" }}>
                {" "}
                C# <Rating name="size-small" defaultValue={3} />
              </h2>
            </Box>
            <Box
              style={{
                background: `rgb(145,139,139)`,
                background: `linear-gradient(90deg, rgba(145,139,139,1) 0%, rgba(31,31,74,1) 100%)`,
                boxShadow: `rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px`,
              }}
            >
              <h2 style={{ color: "white" }}>
                Python <Rating name="size-small" defaultValue={2} />
              </h2>
            </Box>
            <Box
              style={{
                background: `rgb(145,139,139)`,
                background: `linear-gradient(90deg, rgba(145,139,139,1) 0%, rgba(31,31,74,1) 100%)`,
                boxShadow: `rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px`,
              }}
            >
              <h2 style={{ color: "white" }}>
                Java <Rating name="size-small" defaultValue={2} />
              </h2>
            </Box>
          </div>
          <div className="column" style={{ flex: "50%", marginTop: "120px" }}>
            <h1 style={{ color: "white" }}>SKILLS</h1>{" "}
            <ComputerIcon style={{ color: "white" , fontSize:'50px' }} />
          </div>
        </div>

        <Contact />
        <BackToTopButton />
        <Footer />
      </div>
    </>
  );
}

export default App;
