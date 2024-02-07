import React from "react";
import {
  Accordion,
  AccordionSummary,
  Box,
  Typography,
  AccordionDetails,
  styled
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const GuideWrappper = styled('div')({
   "& p":{
    paddingTop:'15px',
    fontSize:'15px',
   },
   "& h6":{
        paddingTop:'15px',
   }
})

function Add_Guide() {
  return (
    <GuideWrappper>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography variant="h6">Add guide to your phone</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box>
            <Box>
              <Typography variant="h6">
                Start by adding the guide to your phone...
              </Typography>
              <Typography variant="body1">
                When you first access this guidebook on your phone you'll notice
                a prompt to add it to your home screen. This is highly
                recommended. It's faster, easier to access, and available if
                you're ever offline without reception. If you didn't see the
                prompt to add it to your phone then be sure to open the guide
                link in your full web browser, you may need to long-press the
                link and copy it before opening in Safari (for iPhone)/Chrome
                (for Android).
              </Typography>
            </Box>
            <Box>
                <Typography variant="h6">Print or save a PDF</Typography>
                <Typography variant="body1">If you’d like to print certain pages ahead of travelling, or if you'd like to save a PDF to your device, just tap the print button above. It won't print right away, but will create a PDF which you can save or print.</Typography>
            </Box>
            <Box className="last-content-wrapper">
                <Typography variant="h6">What next?</Typography>
                <Typography variant="body1">That’s it for now! Please relax, enjoy reading this guidebook, unwind, have fun, and enjoy your stay!</Typography>
            </Box>
          </Box>
        </AccordionDetails>
      </Accordion>
    </GuideWrappper>
  );
}
export default Add_Guide;
