import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function ButtonAppBar() {
  return (
    <Box style={{ flexGrow: 1, color: "black"}}>
      <AppBar position="fixed" color='inherit'>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          {/* <MenuItem>Sandip's Resume</MenuItem>
           */}
          {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Sandip Gajurel
          </Typography>
          <Button color="inherit" style={{alignItems:'end'}}>Login</Button> */}
          <div style={{ float: "left" }}>
            <a
              href="https://www.facebook.com/laxman.gajurel.50"
              style={{ marginRight: "5px" }}
            >
              <FacebookIcon />
            </a>

            <a
              href="https://www.instagram.com/?hl=en"
              style={{ marginRight: "5px" }}
            >
              <InstagramIcon />
            </a>

            <a
              href="https://www.linkedin.com/in/sandip-gajurel-835200240"
              style={{ marginRight: "5px" }}
            >
              <LinkedInIcon />
            </a>

            <a
              href="https://github.com/Sandipgajurel"
              style={{ marginRight: "5px" }}
            >
              <GitHubIcon />
            </a>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
