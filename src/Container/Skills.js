import React from "react";
import Rating from "@mui/material/Rating";
import { Box } from "@mui/system";
import ComputerIcon from "@mui/icons-material/Computer";

const Skills = () => {
  return (
    <div
      className="row"
      id="skills"
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
      <div
        className="column"
        style={{ flex: "50%", marginRight: "15px", marginLeft: "50px" }}
      >
        <Box
          style={{
            background: `rgb(145,139,139)`,
            background: `linear-gradient(90deg, rgba(145,139,139,1) 0%, rgba(31,31,74,1) 100%)`,
          }}
        >
          <h2 style={{ color: "white" }}>
            HTML/CSS/Java Script <Rating name="size-small" defaultValue={4} />
          </h2>
        </Box>
        <Box
          style={{
            background: `rgb(145,139,139)`,
            background: `linear-gradient(90deg, rgba(145,139,139,1) 0%, rgba(31,31,74,1) 100%)`,

            // boxShadow: `10px 10px 37px 0px rgba(24,29,122,1)`,
            // webkitBoxShadow: `10px 10px 37px 0px rgba(24,29,122,1)`,
            // mozBoxShadow: ` 10px 10px 37px 0px rgba(24,29,122,1)`
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
      <div
        className="column"
        style={{
          flex: "50%",
          position: "relative",
          transform: "translate(0%, 40%)",
        }}
      >
        <h1 style={{ color: "white" }}>SKILLS</h1>{" "}
        <ComputerIcon style={{ color: "white", fontSize: "50px" }} />
      </div>
    </div>
  );
};

export default Skills;
