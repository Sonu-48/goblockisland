import React, { useState } from "react";
import {
  Container,
  Box,
  Link,
  List,
  ListItem,
  Stack,
  styled,
  Divider,
  Typography,
  IconButton,
} from "@mui/material";
import { NavLink, Link as ReactRouterLink } from "react-router-dom";
import { IoCall } from "react-icons/io5";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa6";
import { IoIosArrowDown, IoMdMenu } from "react-icons/io";

import { SlCalender } from "react-icons/sl";
import { HiCurrencyDollar } from "react-icons/hi";
import { FaCcMastercard } from "react-icons/fa";

const Wrapper = styled("div")({
  ".blue-top-header": {
    background: "#053f73",
  },

  ".top-header-inner-box": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: "1200px",
    margin: "0 auto",
    position: "relative",
    "& a": {
      color: "#ffff",
      fontSize: "14px",
      fontWeight: "600",
      display: "flex",
      height: "60px",
      boxSizing: "border-box",
      alignItems: "center",
      padding: "10px 20px",
    },
    "& a:hover": {
      background: "#ABE1FA",
      color: "#053f73",
    },
    "& svg": {
      fontSize: "20px",
      paddingLeft: "10px",
    },
  },
  ".top-header-inner-box a:hover .dropdown-link": {
    display: "block",
  },

  ".block-island-outer": {
    background: "rgb(208 43 84)",
    padding: "20px 0px",
    "& img": {
      width: "400px",
    },
  },
  ".block-island-inner-box": {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  ".social-icon-outer-box": {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    "& p": {
      color: "#fff",
      fontWeight: "500",
    },
  },
  ".social-link": {
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    background: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& svg": {
      color: "#053f73",
      fontSize: "18px",
    },
  },
  ".dropdown-link": {
    display: "none",
    background: "#053f73",
    position: "absolute",
    top: "60px",
    width: "300px",
    "& a": {
      padding: "5px 20px",
      width: "100%",
      height: "50px",
    },
  },
  ".mobile-narvar-section":{
    display:'flex',
    alignItems:'center',
    justifyContent:'space-between',
    padding:'10px 20px',
  }
});

function Header() {
  const [showmenu, setShowmenu] = useState(false);
  return (
    <Wrapper>
      {/*Top Header section */}
      <Box className="blue-top-header">
       
        <Stack
          sx={{ display: { lg: "block", md: "block", sm: "none", xs: "none" } }}
        >
          <Box className="top-header-inner-box">
            <Divider />
            <NavLink component={ReactRouterLink} to="">
              FROM NEW LONDON
            </NavLink>
            <Divider />
            <NavLink component={ReactRouterLink} to="">
              FROM LONG ISLAND
            </NavLink>
            <Divider />
            <NavLink to="" component={Box}>
              <SlCalender style={{ paddingRight: "10px" }} />
              SCHEDULES
              <IoIosArrowDown />
              <Box className="dropdown-link">
                <List sx={{ padding: "0px" }}>
                  <ListItem sx={{ padding: "4px 0px" }}>
                    <Link component={ReactRouterLink} to="">
                      NEW LONDON TO BLOCK ISLAND
                    </Link>
                  </ListItem>
                  <ListItem sx={{ padding: "4px 0px" }}>
                    <Link component={ReactRouterLink} to="">
                      LONG ISLAND TO BLOCK ISLAND
                    </Link>
                  </ListItem>
                </List>
              </Box>
            </NavLink>
            <Divider />
            <NavLink component={ReactRouterLink} to="">
              <HiCurrencyDollar style={{ paddingRight: "10px" }} />
              OUR FARES
            </NavLink>
            <Divider />
            <NavLink component={ReactRouterLink} to="">
              <FaCcMastercard style={{ paddingRight: "10px" }} />
              REWARDS
            </NavLink>
            <Divider />
            <NavLink component={ReactRouterLink} to="">
              PROMOTIONS
            </NavLink>
            <Divider />
            <NavLink to="" component={Box}>
              MORE INFO
              <IoIosArrowDown />
              <Box className="dropdown-link">
                <List sx={{ padding: "0px" }}>
                  <ListItem sx={{ padding: "4px 0px" }}>
                    <Link component={ReactRouterLink} to="">
                      ISLAND HIGHLIGHTS
                    </Link>
                  </ListItem>
                  <ListItem sx={{ padding: "4px 0px" }}>
                    <Link component={ReactRouterLink} to="">
                      ISLAND INFO
                    </Link>
                  </ListItem>
                  <ListItem sx={{ padding: "4px 0px" }}>
                    <Link component={ReactRouterLink} to="">
                      DINNER RUN
                    </Link>
                  </ListItem>
                  <ListItem sx={{ padding: "4px 0px" }}>
                    <Link component={ReactRouterLink} to="">
                      DIRECTIONS & PARKING
                    </Link>
                  </ListItem>
                  <ListItem sx={{ padding: "4px 0px" }}>
                    <Link component={ReactRouterLink} to="">
                      LIGHTHOUSE CRUISE
                    </Link>
                  </ListItem>
                  <ListItem sx={{ padding: "4px 0px" }}>
                    <Link component={ReactRouterLink} to="">
                      GIFT CARDS
                    </Link>
                  </ListItem>
                  <ListItem sx={{ padding: "4px 0px" }}>
                    <Link component={ReactRouterLink} to="">
                      CROSS SOUND DELI
                    </Link>
                  </ListItem>
                  <ListItem sx={{ padding: "4px 0px" }}>
                    <Link component={ReactRouterLink} to="">
                      ABOUT OUR FERRY
                    </Link>
                  </ListItem>
                  <ListItem sx={{ padding: "4px 0px" }}>
                    <Link component={ReactRouterLink} to="">
                      CONTACT US
                    </Link>
                  </ListItem>
                  <ListItem sx={{ padding: "4px 0px" }}>
                    <Link component={ReactRouterLink} to="">
                      PRIVACY
                    </Link>
                  </ListItem>
                  <ListItem sx={{ padding: "4px 0px" }}>
                    <Link component={ReactRouterLink} to="">
                      TERMS
                    </Link>
                  </ListItem>
                  <ListItem sx={{ padding: "4px 0px" }}>
                    <Link component={ReactRouterLink} to="">
                      COVID-19
                    </Link>
                  </ListItem>
                </List>
              </Box>
            </NavLink>
            <Divider />
          </Box>
        </Stack>
      </Box>
      {/* main logo header */}
      <Stack
        sx={{ display: { lg: "block", md: "block", sm: "none", xs: "none" } }}
      >
        <Box className="block-island-outer">
          <Container>
            <Box className="block-island-inner-box">
              <Link component={ReactRouterLink} to="/">
                <img src="/images/logo.png" alt="BIF Logo" loading="lazy" />
              </Link>
              <Box className="social-icon-outer-box">
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <Box className="social-link">
                    <IoCall />
                  </Box>
                  <Typography
                    variant="body1"
                    sx={{ fontSize: "17px", fontWeight: "600" }}
                  >
                    (860) 444-4624 or (401) 466-2212
                  </Typography>
                </Box>
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <Link
                    href="https://www.facebook.com/BlockislandExpress"
                    target="_blank"
                    className="social-link"
                  >
                    <FaFacebookF />
                  </Link>
                  <Link
                    href="https://twitter.com/i/flow/login?redirect_after_login=%2Fbiexpressferry"
                    target="_blank"
                    className="social-link"
                  >
                    <FaTwitter />
                  </Link>
                  <Link
                    href="https://www.instagram.com/blockislandexpress/"
                    target="_blank"
                    className="social-link"
                  >
                    <FaInstagram />
                  </Link>
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>
      </Stack>
       {/* Mobile Menu section */}
       <Box
          sx={{ display: { lg: "none", md: "none", sm: "block", xs: "block" } }}
        >
          <Box className="mobile-narvar-section">
            <IconButton>
              <IoMdMenu />
            </IconButton>

            <Link component={ReactRouterLink} to="/">
              <img
                src="/images/mobile-logo.png"
                alt="BIF Logo"
                loading="lazy"
              />
            </Link>

            <Link href="tel://1-860 444-4624">
              <IoCall />
            </Link>
          </Box>
        </Box>
        {/* Mobile Menu Iocn end */}
    </Wrapper>
  );
}
export default Header;
