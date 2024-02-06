import React from "react";
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
} from "@mui/material";
import { IoCallOutline } from "react-icons/io5";
import { LuSend } from "react-icons/lu";
import { Link, NavLink } from "react-router-dom";
import { BsShare } from "react-icons/bs";
import { LuPrinter } from "react-icons/lu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { LuHeartHandshake } from "react-icons/lu";
import { FaArrowRight } from "react-icons/fa6";


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
    "& a":{
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
        width:'100%'
    }
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
    height: "95vh",
    "& h4": {
      color: "#fff",
      fontWeight: "600",
      textShadow: "0px 0px 4px rgba(0,0,0,.2)",
    },
  },
  ".content-wrapper": {
    padding: "15px 15px 0px",
  },
  ".accoridan-heading":{
    display:'flex',
    alignItems:'center',
    gap:'15px',
    "& svg":{
        fontSize:'25px',
        color:'rgb(62, 217, 204)',
    }
  }
});

function InfoPage() {
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
                <Link href="">
                  <LuSend />
                </Link>
                <Link href="">
                  <IoCallOutline />
                </Link>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <IconButton>
                  <BsShare />
                </IconButton>
                <IconButton>
                  <LuPrinter />
                </IconButton>
              </Box>
            </Box>
            <Box className="accordian-link">
              <Box>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                   <Box className="accoridan-heading">
                   <Box>
                      <LuHeartHandshake />
                    </Box>
                    <Typography variant="h4">Welcome</Typography>
                   </Box>
                  </AccordionSummary>
                  <AccordionDetails>
                    <List>
                      <ListItem>
                        <ListItemButton>
                          <NavLink to="/welcome">Welcome
                          <FaArrowRight/>
                          </NavLink>
                          
                        </ListItemButton>
                      </ListItem>
                      <ListItem>
                        <ListItemButton>
                          <Link to="/add-guide">Add guide to your phone</Link>
                        </ListItemButton>
                      </ListItem>
                      <ListItem>
                        <ListItemButton>
                          <Link to="/know-us">Getting To Know Us</Link>
                        </ListItemButton>
                      </ListItem>
                    </List>
                  </AccordionDetails>
                </Accordion>
              </Box>
            </Box>
          </Box>
          <Box className="right-content-section">
            <Box className="heading-section">
              <Box>
                <Typography variant="h4">Welcome</Typography>
              </Box>
            </Box>
            <Box className="content-wrapper"></Box>
          </Box>
        </Box>
      </Container>
    </InfoWrapper>
  );
}
export default InfoPage;
