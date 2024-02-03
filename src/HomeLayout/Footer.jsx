import {
  Box,
  Container,
  Grid,
  Typography,
  styled,
  Link,
  Button,
} from "@mui/material";
import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa6";

const FooterWrapper = styled("div")({
  background: "#d02053",
  padding: "50px 0px 20px",
  marginTop: "100px",
  "& a": {
    display: "block",
    textDecoration: "none",
    color: "#fff",
    padding: "5px 0px",
    boxSizing: "border-box",
    fontSize: "13px",
    fontWeight: "600",
    marginTop: "5px",
  },
  "& p": {
    color: "#fccf5d",
    fontWeight: "600",
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
});

function Footer() {
  return (
    <Box>
      <FooterWrapper>
        <Container>
          <Grid container spacing={3}>
            <Grid item lg={4} md={4} sm={6} xs={12}>
              <Typography variant="body1">SITE INDEX</Typography>
              <Grid container>
                <Grid item lg={6} md={6} sm={6} xs={6}>
                  <Box pt={1}>
                    <Link component={ReactRouterLink} to="/">
                      Home
                    </Link>
                    <Link component={ReactRouterLink} to="">
                      Book Your Trip
                    </Link>
                    <Link component={ReactRouterLink} to="">
                      Schedules
                    </Link>
                    <Link component={ReactRouterLink} to="">
                      Our Fares
                    </Link>
                    <Link component={ReactRouterLink} to="">
                      Rewards
                    </Link>
                    <Link component={ReactRouterLink} to="">
                      Promotions
                    </Link>
                    <Link component={ReactRouterLink} to="">
                      Directions & Parking
                    </Link>
                    <Link component={ReactRouterLink} to="">
                      About Our Ferry
                    </Link>
                    <Link component={ReactRouterLink} to="">
                      Cross Sound Ferry
                    </Link>
                  </Box>
                </Grid>
                <Grid item lg={6} md={6} sm={6} xs={6}>
                  <Box pt={1}>
                    <Link component={ReactRouterLink} to="">
                      Island Highlights
                    </Link>
                    <Link component={ReactRouterLink} to="">
                      Cross Sound Deli
                    </Link>
                    <Link component={ReactRouterLink} to="">
                      Gift Cards
                    </Link>
                    <Link component={ReactRouterLink} to="">
                      Island Info
                    </Link>
                    <Link component={ReactRouterLink} to="">
                      Rewards Login
                    </Link>
                    <Link component={ReactRouterLink} to="">
                      Contact Us
                    </Link>
                    <Link component={ReactRouterLink} to="">
                      Privacy
                    </Link>
                    <Link component={ReactRouterLink} to="">
                      Terms
                    </Link>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            <Grid item lg={4} md={4} sm={6} xs={12}>
              <Box
                align="center"
                sx={{
                  maxWidth: {
                    lg: "315px",
                    md: "315px",
                    sm: "100%",
                    xs: "100%",
                  },
                }}
              >
                <Typography variant="body1">CONNECT WITH US</Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "20px",
                    justifyContent: "center",
                  }}
                  pt={1}
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
                <Box mt={6}>
                  <Typography variant="body1" pb={1}>
                    A SECURE SITE
                  </Typography>
                  <img src="/images/siteseal.gif" alt="siteseal" />
                </Box>
                <Typography
                  variant="body2"
                  pt={3}
                  sx={{ color: "#222!important" }}
                >
                  An Affirmative Action & Equal Opportunity Employer © 2020
                  Block Island Express. All rights reserved.
                </Typography>
              </Box>
            </Grid>
            <Grid item lg={4} md={4} sm={6} xs={12}>
              <Box>
                <Box>
                  <Typography variant="body1">CALL US</Typography>
                  <Typography variant="body1" pt={1} color="#fff!important">
                    (860) 444-4624 or (401) 466-2212
                  </Typography>
                </Box>
                <Box pt={3}>
                  <Typography variant="body1">EMAIL US</Typography>
                  <Link href="mailto:info@goblockisland.com">info@goblockisland.com</Link>
                </Box>
                <Box pt={3} sx={{maxWidth:{lg:'300px',xs:'100%'}}}>
                  <Typography variant="body1">MAIL ADDRESS</Typography>
                  <Typography variant="body2" pt={1} sx={{color:'#222!important'}}>
                    Block Island Express 2 Ferry Street, PO Box 33 New London,
                    CT 06320
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </FooterWrapper>
      {/* <CopyrightSection>
        <Typography variant="h6">
          Copyright © 2023 TradePlumbing . All Rights Reserved.
        </Typography>
      </CopyrightSection> */}
    </Box>
  );
}
export default Footer;
