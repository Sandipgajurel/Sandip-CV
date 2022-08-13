import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { Button, TextField } from "@mui/material";
import TextareaAutosize from "@mui/material/TextareaAutosize";

const Contact = () => {
  return (
    <div
      className="row"
      style={{
        display: "flex",
        height: "auto",
        marginTop: "3px",
        backgroundColor: "black",
        paddingTop: "50px",
        paddingBottom:"20px"
      }}
    >
      <div className="column" style={{ flex: "50%", marginTop: "160px" }}>
        <h1 style={{ color: "white" }}>CONTACT</h1>
        <LocalPhoneIcon style={{ color: "white", fontSize:'50px'  }} />
      </div>

      <div className="column" style={{ flex: "50%", marginRight: "15px" }}>
        <div class="column" display="flex">
          <div class="row">
            <article>
              <LocationOnIcon style={{ color: "white", marginRight: "5px" }} />{" "}
              <span style={{ color: "white" }}>Koteshwor, Kathmandu Nepal</span>
            </article>
            <br />
            <article>
              <LocalPhoneIcon style={{ color: "white", marginRight: "25px" }} />
              <span style={{ color: "white" }}>9813279191, 9810346801 </span>
            </article>
            <br />
            <article>
              <EmailIcon style={{ color: "white", marginRight: "5px" }} />
              <span > <a style={{ color: "white" }} href="mailto:sandipgajulre9191@gmail.com">Sandipgajurel809@gmail.com</a></span>
             
            </article>
          </div>
          <hr />

          <form
            class=""
            action="mailto:sandipgajurel809@gmaiil.com"
            method="post"
            encType="text/plain"
          >
            <h2 style={{ color: "white" }}>Connect With Me</h2>

            <label style={{ color: "white", marginRight: "10px" }}>
              Your Name:{" "}
            </label>
            <TextField
              style={{ backgroundColor: "#78797a",width:'auto' }}
              id="standard-basic"
              required
              type="text"
              name="Your Name"
              variant="standard"
            />
            <br />
            <br />

            <label style={{ color: "white", marginRight: "10px" }}>
              Your Email:{" "}
            </label>
            <TextField
              style={{ backgroundColor: "#78797a", width:'auto' }}
              id="standard-basic"
              required
              type="email"
              name="Your Email"
              variant="standard"
            />
            <br />
            <br />

            <h3 style={{ color: "white" }}>Your Message</h3>
            {/* <textarea name="Your Message" rows="10" cols="40"></textarea><br/> */}
            <TextareaAutosize
              name="Your Message"
              aria-label="minimum height"
              minRows={3}
              required
              placeholder="Minimum 3 rows"
              style={{
                width: 'auto',
                backgroundColor: "#78797a",
                marginLeft: "5px",
              }}
            />
            <br />
            <Button
              type="submit"
              variant="outlined"
              style={{ color: "white", float: "right", marginRight: "160px" }}
            >
              Send
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
