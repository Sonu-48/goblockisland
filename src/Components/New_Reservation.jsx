import React from "react";
import { Box, Button, FormControl, MenuItem, Select, } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

function New_Reservation(){
    const [datevalue, setDatevalue] = React.useState(dayjs("2022-04-17"));
    return(
        <Box>
            <Box>
                <Box>
                    <Select size="small" fullWidth >
                        <MenuItem value="Departure Locaction">Departure Locaction</MenuItem>
                        <MenuItem value="Block Island, RI">Block Island, RI</MenuItem>
                        <MenuItem value="New London, CT">New London, CT</MenuItem>
                        <MenuItem value="Orient Point, LI, NY">Orient Point, LI, NY</MenuItem>
                    </Select>
                </Box>
                <Box mt={3} mb={3}>
                    <FormControl sx={{width:'100%'}}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        value={datevalue}
                        onChange={(date) => setDatevalue(date)}
                        format="DD-MM-YYYY"
                        disableFuture={true}
                      />
                    </LocalizationProvider>
                    </FormControl>
                </Box>
                <Box mt={5}>
                    <Button variant="contained" color="primary" fullWidth>Start Reservation</Button>
                </Box>
            </Box>
        </Box>
    );
}
export default New_Reservation;