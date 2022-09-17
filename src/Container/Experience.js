import React from "react";
import reactimg from "../img/3.png";
import Card from "@mui/material/Card";
import { CardActionArea } from "@mui/material";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
const Experience = () => {
  return (
    <div
      className="row"
      id="experience"
      style={{
        display: "flex",
        height: "auto",
        marginTop: "3px",
        backgroundColor: "black",
        paddingTop: "50px",
        paddingBottom: "50px",
        position: "relative",
      }}
    >
      <div
        className="column"
        style={{
          flex: "50%",
          position: "relative",
          transform: "translate(0%, 30%)",
        }}
      >
        <h1 style={{ color: "ButtonShadow" }}>EXPERIENCE</h1>{" "}
        <WorkHistoryIcon style={{ color: "white", fontSize: "50px" }} />
      </div>

      <div className="column" style={{ flex: "50%", marginRight: "10px" }}>
        <Card
          className="shadow-md m2 p3 rounded"
          style={{
            float: "right",
            marginRight: "auto",
            marginBottom: "auto",
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
              <h3 style={{ color: "black" }}>GrayCode Technology Pvt. Ltd</h3>
              <h4 style={{ color: "black" }}>
                September, 2021 - January, 2022
              </h4>
            </div>
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
};

export default Experience;
