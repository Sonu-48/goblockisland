import React from "react";
import {
  Accordion,
  AccordionSummary,
  Box,
  Typography,
  AccordionDetails,
  styled,
  Link,
  List,
  ListItem,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link as ReactRouterLink } from "react-router-dom";

const WelcomeWrapper = styled("div")({
  "& img": {
    width: "100%",
    height: "100%",
  },
  "& h6": {
    marginTop: "15px",
  },
  "& p": {
    fontSize: "15px",
    paddingTop: "15px",
  },
  ".enviro-rental-link": {
    marginTop: "15px",
    "& a": {
      color: "#2dc26b",
      fontWeight: "600",
    },
  },
  ".link-list": {
    marginTop: "20px",
    "& a": {
      color: "#007bff",
      fontWeight: "600",
    },
  },
});

function Welcome() {
  return (
    <WelcomeWrapper>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography variant="h6">Welcome</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box>
            <img
              src="/images/welcome-banner.jpg"
              alt="Welcome"
              loading="lazy"
            />
          </Box>
          <Box>
            <Box>
              <Typography variant="h6">
                Welcome: Here’s everything you need to know about your stay with
                us
              </Typography>
              <Typography variant="body1">
                This is your free time - we know how precious it is. That's why
                we've created this digital guidebook. Here, you'll find
                everything you need to know about staying with us, from when to
                check-in/out and the WiFi code, to finding great coffee and the
                best local restaurants. It's all here.
              </Typography>
            </Box>
            <Box>
              <Typography variant="h6">Do I really need this info?</Typography>
              <Typography variant="body1">
                Honest answer? 100% YES! Think of it as having us "virtually" by
                your side, showing you: Here are some hyperlinks that will take
                you to sections of the guide that most guests ask about.
              </Typography>
            </Box>
            <Box className="link-list">
              <List>
                <ListItem>
                  <Link href="">how to find us</Link>
                </ListItem>
                <ListItem>
                  <Link href="">the check-in/out instructions</Link>
                </ListItem>
                <ListItem>
                  <Link href="">driving in our neighborhood</Link>
                </ListItem>
                <ListItem>
                  <Link href="">grocery stores</Link>
                </ListItem>
                <ListItem>
                  <Link href="">wonderful hiking trails</Link>
                </ListItem>
                <ListItem>
                  <Link href="">excellent restaurants</Link>
                </ListItem>
                <ListItem>
                  <Link href="">pamper yourself </Link>
                </ListItem>
                <ListItem>
                  <Link href="">bears, turkey’s, birds and more</Link>
                </ListItem>
              </List>
            </Box>
            <Box mt={1}>
              <Typography variant="body1">
                This is "Extra Reading" for those who are interested in how we
                are trying to reduce our environmental footprint with this short
                term rental!!
              </Typography>
            </Box>
            <Box className="enviro-rental-link">
              <Link
                href="https://drive.google.com/file/d/1W24wGabw54CVbKzX8_dqp0zl9ToAuyEj/view"
                target="_blank"
              >
                EnviroRental
              </Link>
            </Box>
           <Box className="last-content-wrapper">
           <Typography variant="body1">
              We want you to leave us relaxed, content, and rejuvenated!
            </Typography>
           </Box>
          </Box>
        </AccordionDetails>
      </Accordion>
    </WelcomeWrapper>
  );
}
export default Welcome;
