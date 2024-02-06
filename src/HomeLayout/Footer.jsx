import React from "react";
import { Box, styled } from "@mui/material";
import { NavLink } from "react-router-dom";
import { FaHome, FaMapMarkerAlt, FaSearch } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";

const FooterSection = styled("div")({
  position: "fixed",
  bottom: "0px",
  left: "0px",
  right: "0px",
  zIndex: "999",
  background: "rgb(23, 41, 60)",
  width: "100%",
  height: "70px",
  ".footer-inner-group-box": {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    "& a": {
      color: "#fff",
      fontWeight: "700",
      fontSize: "12px",
      width: "100%",
      height: "70px",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      justifyContent: "center",
      gap: "5px",
    },
    "& a.active": {
      background: "#0000004d",
    },
  },
  ".navigation-box": {
    width: "100%",
    "& svg": {
      fontSize: "20px",
    },
  },
});

function Footer() {
  return (
    <FooterSection>
      <Box className="footer-inner-group-box">
        <Box className="navigation-box">
          <NavLink to="/">
            <FaHome />
            Home
          </NavLink>
        </Box>
        <Box className="navigation-box">
          <NavLink to="/info">
            <IoMdInformationCircleOutline />
            INFO
          </NavLink>
        </Box>
        <Box className="navigation-box">
          <NavLink to="/map">
            <FaMapMarkerAlt />
            MAP
          </NavLink>
        </Box>
        <Box className="navigation-box">
          <NavLink to="/search">
            <FaSearch />
            SEARCH
          </NavLink>
        </Box>
      </Box>
    </FooterSection>
  );
}
export default Footer;
