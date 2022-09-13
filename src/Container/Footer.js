import React, { Component } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

class Footer extends Component {
  render() {
    if (this.props.data) {
      var networks = this.props.data.social.map(function(network) {
        return (
          <li key={network.name}>
            <a href={network.url}>
              <i className={network.className}></i>
            </a>
          </li>
        );
      });
    }

    return (
      <footer style={{ height: "100px" }}>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">{networks}</ul>

            <div style={{marginLeft:'auto',marginRight:'auto'}}>
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
            <div style={{marginLeft:'auto',marginRight:'auto'}}>
              <ul className="copyright" style={{ fontWeight: "bold" }}>
                
              &copy; Copyright 2022 Sandip Gajurel
              </ul>
            </div>
          </div>
          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open"></i>
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
