import React from "react";
import { Box, TextField, styled, Container, Typography, IconButton,InputAdornment } from "@mui/material";
import { CiSearch } from "react-icons/ci";


const SearchWrapper = styled("div")({
  background: "#f8f8f8",
  width: "50%",
  height: "85vh",
  margin: "0 auto",
  overflow: "auto",
  padding: "40px 0px",
  display:'flex',
  alignItems:'center',
  justifyContent:'center',
  "@media screen and (max-width:1200px)":{
    width:'100%!important'
  },
  "& h4": {
    color: "#303133",
    textAlign: "justify",
  },
  ".search-tab-wrapper":{
    "& input::placeholder":{
        fontSize:'19px',
        opacity:'0.6'
    },
    "& svg":{
        fontSize:'20px',
    }
  }
});

function Searchpage() {
  return (
    <SearchWrapper>
      <Container>
        <Box className="search-tab-wrapper">
          <Box>
            <TextField
              variant="outlined"
              placeholder="Search for keywords"
              autoComplete="off"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment>
                    <IconButton>
                      <CiSearch />
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
          </Box>
          <Box pt={2}>
            <Typography variant="h4">
              Our search will return results that match ANY of your keywords.
              Where it finds ALL of those words, no matter what order the words
              are in, it will place that result at the top.
            </Typography>
          </Box>
        </Box>
      </Container>
    </SearchWrapper>
  );
}
export default Searchpage;
