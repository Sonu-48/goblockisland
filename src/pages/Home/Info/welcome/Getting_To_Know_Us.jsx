import React from "react";
import {
  Accordion,
  AccordionSummary,
  Box,
  Typography,
  AccordionDetails,
  styled,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const GettingWrapper = styled("div")({
  "& p": {
    paddingTop: "20px",
    fontSize: "15px",
  },
  "& span":{
    fontWeight:'600'
  },
  "& h6": {
    paddingTop: "15px",
  },
  "& img": {
    width: "100%",
    height: "100%",
  },
});

function Getting_To_Know_Us() {
  return (
    <GettingWrapper>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography variant="h6">
            Why we love being short term rental hosts?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box>
            <Box>
              <img src="/images/knows-us.jpg" alt="Knows Us" />
            </Box>
            <Box>
              <Typography variant="body1">
                I know what you are thinking already. Why on earth would we put
                a picture of us with a blue ocean background when we live in the
                mountains? Easy; when you start getting older you grab whatever
                picture you think makes you look good. Moving on.
              </Typography>
              <Typography variant="body1">
                This is definitely <span>"not required reading"</span> but if
                you would like to know a little about us and why we built this
                home, here it is.
              </Typography>
              <Typography variant="body1">
                We are Jim and Barbara and live right next door to our brand new
                Short Term Rental. Both of us worked in the hospitality industry
                much of our lives. We will be there to greet you and get you
                settled in. Then we are available 24/7 and will assist you as
                much or as little as you desire. We have lived in Asheville
                since 2003 and can help you make the most of your visit or we
                can just leave you to relax and explore on your own. Barbara is
                German and I am American. We met in Bermuda, both working in the
                hotel industry, got married, had two lovely daughters, and
                stayed there for 16 years!
              </Typography>
              <Typography variant="body1">
                We fell in love with The Cliffs Community, because it is a small
                quiet neighborhood and in close proximity to downtown. Our home
                is located on a cul-de-sac with 3 other homes. We built a house
                next to our home so others could enjoy the beauty of this
                neighborhood, the spectacular mountain views, and outdoor living
                space. Having been in the hospitality business just made this a
                perfect fit
              </Typography>
              <Typography variant="body1">
                Asheville Hillside Hideaway was built with simplicity in mind.
                Clean lines and no clutter provide a wonderful open and spacious
                feeling. Many windows catch the natural daylight from sunrise to
                sunset and the views are spectacular. We are very fortunate to
                have natural wildlife in our neighborhood. It is not uncommon to
                watch a flock of 10-20 wild turkeys. There is also the
                occasional black bear. Don't worry though; we will call you so
                you don't miss it!
              </Typography>

              <Box className="last-content-wrapper">
                <Typography variant="body1">Enjoy Your stay!</Typography>
              </Box>
            </Box>
          </Box>
        </AccordionDetails>
      </Accordion>
    </GettingWrapper>
  );
}
export default Getting_To_Know_Us;
