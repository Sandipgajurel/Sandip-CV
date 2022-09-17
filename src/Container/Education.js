import React from "react";
import Card from "@mui/material/Card";
import { CardActionArea } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";

const Education = () => {
  return (
    <div
      className="row"
      id="education"
      style={{
        display: "flex",
        height: "auto",
        marginTop: "3px",
        backgroundColor: "black",
        paddingTop: "30px",
        paddingBottom: "30px",
        position: "relative",
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
      <div
        className="column"
        style={{
          flex: "50%",
          position: "relative",
          transform: "translate(0%, 40%)",
        }}
      >
        <h1 style={{ color: "ButtonShadow" }}>EDUCATION</h1>{" "}
        <SchoolIcon style={{ color: "white", fontSize: "50px" }} />
      </div>
    </div>
  );
};

export default Education;
