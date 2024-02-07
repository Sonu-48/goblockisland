import React from "react";
import { Avatar, Box, Button, Typography, styled, Link } from "@mui/material";
import { IoCallOutline } from "react-icons/io5";
import { LuSend } from "react-icons/lu";
import { Link as ReactRouterLink, useNavigate } from "react-router-dom";
import PageHelmet from "../../../Components/PageHelmet";
import { FaMapMarkerAlt } from "react-icons/fa";

const BannerWrapper = styled("div")({
  backgroundImage: "url('/images/home-banner-img.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "100vh",
  position: "relative",
  zIndex: "1",
  "&::after": {
    position: "absolute",
    content: "''",
    width: "100%",
    height: "100vh",
    left: "0px",
    top: "0px",
    background: "#000000",
    opacity: "0.3",
    zIndex: "-1",
  },
  ".banner-content-outer": {
    color: "#fff",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    textAlign: "center",
    "& h5": {
      padding: "15px 0px",
      fontWeight: "600",
    },
  },
  ".social-icon-link": {
    padding: "5px 0px",
    "& a": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "15px",
      fontSize: "1.0625rem",
      fontWeight: "700",
    },
  },
});

function BannerSection() {
  const navigate = useNavigate();
  return (
    <>
      <PageHelmet title="Asheville Hillside Hideaway Guest Guidebook | Touch Stay">
        <BannerWrapper>
          <Box className="banner-content-outer">
            <Box align="center">
              <Avatar src="/images/banner-small-img" />
            </Box>
            <Box>
              <Typography variant="h5">Barbara & Jim Welcome You</Typography>
            </Box>
            <Box mt={2} mb={2}>
              <Box className="social-icon-link">
                <Link href="tel:828-713-8559">
                  <IoCallOutline />
                  828-713-8559
                </Link>
              </Box>
              <Box className="social-icon-link">
                <Link href="mailto:swimjim1234@gmail.com">
                  <LuSend />
                  swimjim1234@gmail.com
                </Link>
              </Box>
            </Box>
            <Box>
              <Typography variant="h5">Asheville Hillside Hideaway</Typography>
              <Link component={ReactRouterLink} to="/map">
                <FaMapMarkerAlt style={{ paddingRight: "5px" }} />
                218 Cliffside Court <br /> Asheville, NC 28803 US
              </Link>
            </Box>
            <Box mt={3}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => navigate("/info")}
              >
                GET STARTED
              </Button>
            </Box>
          </Box>
        </BannerWrapper>
      </PageHelmet>
    </>
  );
}
export default BannerSection;
