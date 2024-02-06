import { createTheme } from "@mui/material";
import typography from "./typography";

const theme = createTheme({
  typography,
  palette: {
    primary: {
      main: "#ffff",
      light: "#42a5f5",
      dark: "#1565c0",
      contrastText: "#fff",
      errors: "#ef5350",
    },
    // secondary: purple,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.variant === "contained" &&
            ownerState.color === "primary" && {
              backgroundColor: "rgb(62, 217, 204)",
              color: "#fff",
              borderRadius: "4px",
              border:'2px solid rgb(62, 217, 204)',
              fontWeight: 700,
              fontSize: "15px",
              padding: "10px 24px",
              textTransform: "capitalize",
              // fontFamily:"'Futura, sans-serif'",
              // borderBottom:'3px solid #1a2a6b',
              "&:hover": {
                backgroundColor: "transparent",
                border:'2px solid rgb(62, 217, 204)',
                color:'#fff',
              },
            }),
        }),
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          maxWidth: "1260px!important",
        },
      },
    },
    MuiAvatar:{
      styleOverrides:{
        root:{
          width:'80px',
          height:'80px',
          border:'3px solid #fff',
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: "10px",
          fontSize:'18px',
          // paddingRight:'5px',
          "&$focused": {
            border: "1px solid black",
          },

          "& .MuiInputBase-input": {},
          "& notchedOutline": {
            border: "1px solid black",
          },
          // "&:hover $notchedOutline": {
          //   borderColor: "green"
          // },
          "&$focused $notchedOutline": {
            borderColor: "green",
          },
        },
      },
    },
    // MuiIconButton: {
    //   styleOverrides: {
    //     root: {
    //       background: "#143e6b",
    //       color: "#fff",
    //       "&:hover": {
    //         background: "#143e6b!important",
    //         color: "#fff!important",
    //       },
    //     },
    //   },
    // },
    MuiList:{
      styleOverrides:{
        root:{
          paddingTop:'0px',
        }
      }
    },
    // MuiListItemButton:{
    //   styleOverrides:{
    //     root:{
    //         display:'flex',
    //         alignItems:'center',
    //         justifyContent:'space-between'
    //     }
    //   }
    // },
    MuiListItem: {
      styleOverrides: {
        root: {
          padding: "4px 15px",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        // Name of the slot
        root: {
          // width:'1200px',
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          maxWidth: "850px",
          width: "100%",
          borderRadius: "8px",
          // padding:'20px 0px',
          margin:'10px',
          boxShadow:
            "0 3.3px 39.5px -27px rgba(255,255,255,.04), 0 4px 65.1px -27px rgba(255,255,255,.08400000000000001), 0 5.1px 113.7px -27px rgba(255,255,255,.083), 0 8px 246px -27px rgba(255,255,255,.079)",
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          color: "#787878",
          fontWeight: 600,
          fontSize: "15px",
          textTransform: "capitalize",
          "&.Mui-selected": {
            color: "#4878bf",
            // borderBottom: "2px solid #4878bf",
            // background:'4878bf',
            // color:'#ffff'
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          background: "#4878bf",
          height: "2px",
        },
      },
    },
    MuiDayCalendar: {
      styleOverrides: {
        root: {},
        "&.header": {
          background: "rgba(0, 0, 0, 0.87)!important",
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontSize: "12px!important",
        },
      },
    },
    MuiBadge:{
      styleOverrides:{
        badge:{
          background:'#f23b3b',
          top:'-5px',
          right:'5px'
        }
      }
    },
    MuiDivider:{
      styleOverrides:{
        root:{
          height: "60px", 
          width: "2px", 
          background: "#065eaa"
        }
      }
    }
  },
  MuiAccordionSummary: {
    styleOverrides: {
      root: {
        "& .MuiAccordionSummary-content": {
          alignItems: 'center',
          gap: '15px',
        }
      }
    }
  }
  
  
});
export default theme;
