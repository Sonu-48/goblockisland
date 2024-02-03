import React, { useState } from "react";
import { Box, Container, Grid, Typography, styled } from "@mui/material";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import New_Reservation from "../../Components/New_Reservation";

const BannerWrapper = styled("div")({
  ".banner-outer-box": {
    background: "#ffff",
  },
});

function Bannerpage() {
  const [tabValue, setTabValue] = useState("1");

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };
  return (
    <BannerWrapper>
      <Container>
        <Box className="banner-outer-box">
          <Grid container spacing={2}>
            <Grid item lg={8} md={7} sm={6} xs={12}>
              <Box>
                <img
                  src="/images/20-BIE-end-of-season-marquee-min.jpg"
                  alt="Banner"
                  loading="lazy"
                  width="100%"
                />
              </Box>
            </Grid>
            <Grid item lg={4} md={5} sm={6} xs={12}>
              <Box>
                <TabContext value={tabValue}>
                  <Box>
                    <TabList
                      onChange={handleChange}
                      aria-label="lab API tabs example"
                    >
                      <Tab label="New Reservations" value="1" />
                      <Tab label="Change Reservations" value="2" />
                    </TabList>
                  </Box>
                  <TabPanel value="1">
                    <New_Reservation/>
                  </TabPanel>
                  <TabPanel value="2">Item Two</TabPanel>
                </TabContext>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </BannerWrapper>
  );
}
export default Bannerpage;
