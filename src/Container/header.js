import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
//import { Link } from "react-router-dom";
import DrawerComponent from "./Drawer";
import { Link } from "react-scroll";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";


const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(5),
    display: "flex",
  },
  logo: {
    paddingRight:'100px',
    flexGrow: "1",
    cursor: "pointer",
  
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "17px",
    marginLeft: theme.spacing(7),
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
}));

function Header() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar position="fixed"
    style={{backgroundColor:'#2f2626'}}
    >
      <CssBaseline />
      <Toolbar>
        <Typography variant="h5" className={classes.logo}>
          Sandip Gajurel
          <hr />
          <div style={{ float: "right"}}>
            <a
              href="https://www.facebook.com/laxman.gajurel.50"
              style={{ marginRight: "5px", color:'blue' }}
            >
              <FacebookIcon />
            </a>

            <a
              href="https://www.instagram.com/?hl=en"
              style={{ marginRight: "5px", color:'blue' }}
            >
              <InstagramIcon />
            </a>

            <a
              href="https://www.linkedin.com/in/sandip-gajurel-835200240"
              style={{ marginRight: "5px", color:'blue' }}
            >
              <LinkedInIcon />
            </a>

            <a
              href="https://github.com/Sandipgajurel"
              style={{color:'blue', marginRight:'100px'}}
            >
              <GitHubIcon />
            </a>
          </div>
        </Typography>
        {isMobile ? (
          <DrawerComponent />
        ) : (
          <div className={classes.navlinks}>
            <Link  to="experience" className={classes.link} spy={true} smooth={true}>
              Experience
            </Link>
            <Link to="education" className={classes.link} spy={true} smooth={true}>
              Education
            </Link>
            <Link to="projects" className={classes.link} spy={true} smooth={true}>
              Projects
            </Link>
            <Link to="skills" className={classes.link} spy={true} smooth={true}>
              Skills
            </Link>
            <Link to="contact" className={classes.link} spy={true} smooth={true}>
              Contact
            </Link>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}
export default Header;