import React from "react";
import Card from "@mui/material/Card";
import { CardActionArea } from "@mui/material";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
const Projects = () => {
  return (
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
      <div className="column" style={{ flex: "50%", marginTop: "200px" }}>
        <h1 style={{ color: "ButtonShadow" }}>PROJECTS</h1>
        <TaskAltIcon style={{ color: "white", fontSize:'50px'  }} />
      </div>

      <div className="column" style={{ flex: "50%", marginRight: "15px" }}>
        <Card
          className="shadow-md m2 p3 rounded"
          style={{
            marginRight: "auto",
            marginLeft: "auto",
            display: "flex",
            width: "100%",
            background: `rgb(168,164,164)`,
            background: `linear-gradient(90deg, rgba(168,164,164,1) 31%, rgba(131,121,189,1) 100%)`,
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
                Final Year Project "Ecommerce App Development"
              </h1>
              <h3 style={{ color: "black" }}>
                <a href="https://github.com/Sandipgajurel/Sandipgajurel-FYP_final.git">
                  github link of this project
                </a>
              </h3>
            </div>
          </CardActionArea>
        </Card>
        {/* <h2 style={{color:'white'}}>Final Year Project "Ecommerce App Development"</h2>
   <a href="https://github.com/Sandipgajurel/Sandipgajurel-FYP_final.git">github link of this project</a> */}
        <hr />
        <Card
          className="shadow-md m2 p3 rounded"
          style={{
            marginRight: "auto",
            marginLeft: "auto",
            display: "flex",
            width: "100%",
            background: `rgb(168,164,164)`,
            background: `linear-gradient(90deg, rgba(168,164,164,1) 31%, rgba(131,121,189,1) 100%)`,
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
                Java Project "GUI"
              </h1>
              <h3 style={{ color: "black" }}>
                <a href="https://github.com/Sandipgajurel/java-2nd_project.git">
                  github link of this project
                </a>{" "}
              </h3>
            </div>
          </CardActionArea>
        </Card>

        {/* <h2 style={{color:'white'}}>Java Project "GUI"</h2>
   <a href="https://github.com/Sandipgajurel/java-2nd_project.git">github link of this project</a> */}

        <hr />

        <Card
          className="shadow-md m2 p3 rounded"
          style={{
            marginRight: "auto",
            marginLeft: "auto",
            display: "flex",
            width: "100%",
            background: `rgb(168,164,164)`,
            background: `linear-gradient(90deg, rgba(168,164,164,1) 31%, rgba(131,121,189,1) 100%)`,
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
                DVD Rental System "C#"
              </h1>
              <h3 style={{ color: "black" }}>
                <a href="https://github.com/Sandipgajurel/.Net-project-DVD-rental-system-.git">
                  github link of this project
                </a>
              </h3>
            </div>
          </CardActionArea>
        </Card>
        {/* <h2 style={{color:'white'}}>DVD Rental System C#</h2>
   <a href="https://github.com/Sandipgajurel/.Net-project-DVD-rental-system-.git">github link of this project</a> */}
        <hr />

        <Card
          className="shadow-md m2 p3 rounded"
          style={{
            marginRight: "auto",
            marginLeft: "auto",
            display: "flex",
            width: "100%",
            background: `rgb(168,164,164)`,
            background: `linear-gradient(90deg, rgba(168,164,164,1) 31%, rgba(131,121,189,1) 100%)`,
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
                College Management System "Database Project"
              </h1>
              <h3 style={{ color: "black" }}>
                <a href="https://github.com/Sandipgajurel/Database-college-management-system-.git">
                  github link of this project
                </a>
              </h3>
            </div>
          </CardActionArea>
        </Card>
        {/* <h2 style={{color:'white'}}>Database Project</h2>
   <a href="https://github.com/Sandipgajurel/Database-college-management-system-.git">github link of this project</a> */}
        <hr />

        <Card
          className="shadow-md m2 p3 rounded"
          style={{
            marginRight: "auto",
            marginLeft: "auto",
            display: "flex",
            width: "100%",
            background: `rgb(168,164,164)`,
            background: `linear-gradient(90deg, rgba(168,164,164,1) 31%, rgba(131,121,189,1) 100%)`,
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
                Movie Recommendation System "Python"
              </h1>
              <h3 style={{ color: "black" }}>
                <a href="https://github.com/Sandipgajurel/Database-college-management-system-.git">
                  github link of this project
                </a>
              </h3>
            </div>
          </CardActionArea>
        </Card>
        {/* <h2 style={{color:'white'}}>Movie Recommendation System</h2>
   <a href="https://github.com/Sandipgajurel/Python-Movie-recommendation-system-.git">github link of this project</a> */}
      </div>
    </div>
  );
};

export default Projects;
