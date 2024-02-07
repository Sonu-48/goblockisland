import React, { useState } from "react";
import {
  Avatar,
  Box,
  Container,
  IconButton,
  Typography,
  styled,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemButton,
  Link,
  Tab,
  Tabs,
} from "@mui/material";
import PropTypes from "prop-types";
import { IoCallOutline } from "react-icons/io5";
import { LuSend } from "react-icons/lu";
import { Link as ReactRouterLink, NavLink } from "react-router-dom";
import { BsShare } from "react-icons/bs";
import { LuPrinter } from "react-icons/lu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { LuHeartHandshake } from "react-icons/lu";
import { FaArrowRight } from "react-icons/fa6";
import ShareModal from "../../../Components/ShareModal";
import { TbLayoutNavbarCollapse, TbLayoutNavbarExpand } from "react-icons/tb";
import Welcome from "./welcome/Welcome";
import Add_Guide from "./welcome/Add_Guide";
import Getting_To_Know_Us from "./welcome/Getting_To_Know_Us";
import { MdFormatListNumbered } from "react-icons/md";


const InfoWrapper = styled("div")({
  marginTop: "20px",
  ".Sidebar-section": {
    background: "#f9f9f9",
    marginRight: "30px",
    flex: " 0 0 41.66667%",
    width: "30%%",
    psotion: "relative",
  },
  ".accordian-link": {
    padding: "15px 15px 80px",
    height: "90vh",
    boxSizing: "border-box",
    overflow: "auto", // Scroll will appear only if content overflows
    "& h4": {
      fontWeight: "500",
      color: "#000",
    },
    "& a": {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
    },
  },
  ".heading-section": {
    background: "rgb(62, 217, 204)",
    borderRadius: "4px 4px 0px 0px",
    height: "70px",
    width: "100%",
    padding: "0 15px",
    boxSizing: "border-box",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    psotion: "absolute",
    left: "0px",
    zIndex: "99",
    "& svg": {
      color: "#fff",
      fontSize: "25px",
    },

    "& a": {
      color: "#fff",
      fontSize: "25px",
    },
  },
  ".avatar-wrapper": {
    display: "flex",
    alignItems: "center",
    gap: "15px",
  },
  ".info-inner-wrapper": {
    display: "flex",
    height: "100%",
    width: "100%",
  },
  ".right-content-section": {
    background: "#f9f9f9",
    flex: " 58.33333%",
    width: "60%",
    overflow: "auto", // Scroll will appear only if content overflows
    height: "100%",
    "& h4": {
      color: "#fff",
      fontWeight: "600",
      textShadow: "0px 0px 4px rgba(0,0,0,.2)",
    },
  },
  ".content-wrapper": {
    padding: "15px 15px 80px",
    height: "90vh",
    boxSizing: "border-box",
    overflow: "auto", // Scroll will appear only if content overflows
    "& h4": {
      color: "#000",
      fontWeight: "600",
    },
  },
  ".accordian-heading": {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    "& svg": {
      fontSize: "25px",
      color: "rgb(62, 217, 204)",
    },
  },
  "@media screen and (max-width:768px)": {
    ".Sidebar-section": {
      width: "100%!important",
    },
    ".right-content-section": {
      display: "none",
    },
    ".info-inner-wrapper": {
      display: "block",
    },
  },
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

function InfoPage() {
  const [openDialog, setOpenDialog] = useState(false);
  const [beforeYouLeaveHomeValue, setBeforeYouLeaveHomeValue] = useState(3);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleBeforeYouLeaveHomeChange = (event, newValue) => {
    setBeforeYouLeaveHomeValue(newValue);
  };
  return (
    <InfoWrapper>
      <Container sx={{ maxWidth: "1170px!important" }}>
        <Box className="info-inner-wrapper">
          <Box className="Sidebar-section">
            <Box className="heading-section">
              <Box className="avatar-wrapper">
                <Avatar
                  src="/images/banner-small-img"
                  sx={{ width: "50px", height: "50px" }}
                />
                <Link href="mailto:swimjim1234@gmail.com">
                  <LuSend />
                </Link>
                <Link href="tel:828-713-8559">
                  <IoCallOutline />
                </Link>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <IconButton onClick={() => setOpenDialog(true)}>
                  <BsShare />
                </IconButton>
                <IconButton>
                  <LuPrinter />
                </IconButton>
              </Box>
            </Box>
            <Box className="accordian-link">
             
                <Accordion defaultExpanded>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <Box className="accordian-heading">
                      <Box>
                        <LuHeartHandshake />
                      </Box>
                      <Typography variant="h6">Welcome</Typography>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Tabs
                      orientation="vertical"
                      variant="scrollable"
                      value={value}
                      onChange={handleChange}
                    >
                      <Tab label="Welcome" {...a11yProps(0)} />
                      <Tab label="Add guide to your phone" {...a11yProps(1)} />
                      <Tab label="Getting To Know Us" {...a11yProps(2)} />
                    </Tabs>
                  </AccordionDetails>
                </Accordion>
             
             
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                  >
                    <Box className="accordian-heading">
                      <Box>
                        <MdFormatListNumbered />
                      </Box>
                      <Typography variant="h6">Before You Leave Home</Typography>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Tabs
                      orientation="vertical"
                      variant="scrollable"
                      value={beforeYouLeaveHomeValue}
                      onChange={handleBeforeYouLeaveHomeChange}
                    >
                      <Tab label="Driving Directions" {...a11yProps(3)} />
                      <Tab label='"The little extras"' {...a11yProps(4)} />
                      <Tab label="90 Seconds at Asheville Hillside Hideaway!" {...a11yProps(5)} />
                    </Tabs>
                  </AccordionDetails>
                </Accordion>
             
            </Box>
          </Box>
          <Box className="right-content-section">
            <Box className="heading-section">
              <Box>
                <Typography variant="h4">Welcome</Typography>
              </Box>
              <Box>
                <IconButton>
                  <TbLayoutNavbarCollapse />
                </IconButton>
                <IconButton>
                  <TbLayoutNavbarExpand />
                </IconButton>
              </Box>
            </Box>
            <Box className="content-wrapper">
              <TabPanel value={value} index={0} sx={{padding:'0px!important'}}>
                
                <Welcome />
              </TabPanel>
              <TabPanel value={value} index={1}>
                  <Add_Guide/>
              </TabPanel>
              <TabPanel value={value} index={2}>
               <Getting_To_Know_Us/>
              </TabPanel>
              <TabPanel value={beforeYouLeaveHomeValue} index={3}>
               <Typography variant="body1"> index 3</Typography>
              </TabPanel>
              <TabPanel value={beforeYouLeaveHomeValue} index={4}>
              <Typography variant="body1"> index 4</Typography>
              </TabPanel>
              <TabPanel value={beforeYouLeaveHomeValue} index={5}>
              <Typography variant="body1"> index 5</Typography>
              </TabPanel>
            </Box>
          </Box>
        </Box>
        {/* Share modal Component */}
        <ShareModal openDialog={openDialog} setOpenDialog={setOpenDialog} />
      </Container>
    </InfoWrapper>
  );
}
export default InfoPage;
