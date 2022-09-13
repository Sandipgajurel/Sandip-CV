import { Button } from "@mui/material";
import React from "react";
import { useEffect, useState } from "react";
const BackToTopButton = () => {
  const [backToTopBotton, setBackToTopButton] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="App">
      {backToTopBotton && (
        <Button
          onClick={scrollUp}
          style={{
            backgroundColor: "green",
            color: "white",
            position: "fixed",
            bottom: "50px",
            right: "40px",
            height: "45px",
            width: "10px",
            fontSize: "40px",
          }}
        >
          ^
        </Button>
      )}
    </div>
  );
};

export default BackToTopButton;
