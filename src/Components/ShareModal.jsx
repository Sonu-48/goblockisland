import React from "react";
import {
  Box,
  Dialog,
  IconButton,
  Typography,
  styled,
  Link,
} from "@mui/material";
import { MdClose, MdOutlineEmail, MdOutlineWhatsapp } from "react-icons/md";
import { GoCopy } from "react-icons/go";
import { LuMessageCircle } from "react-icons/lu";
import { toast } from "react-toastify";

const SharemodalWrapper = styled("div")({
  "& h6": {
    fontWeight: "600",
    color: "#16293c",
  },
  ".share-modal-header": {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  ".share-link-outer": {
    boxShadow: "0 0 5px 1px #0000001a",
    borderRadius: "4px",
    border: "1px solid #ccc",
    marginTop: "20px",
    padding: "15px",
    display: "flex",
    alignItems: "center",
    gap: "15px",
    "& svg": {
      fontSize: "25px",
      color: "#3ed9cc",
    },
  },
});

function ShareModal({ openDialog, setOpenDialog }) {
  const copyUrlToClipboard = () => {
    setOpenDialog(false);
    const url = window.location.href;
    navigator.clipboard
      .writeText(url)
      .then(() => {
        // URL copied successfully
        toast.success("Copied to clipboard!");
      })
      .catch((error) => {
        console.error("Error copying URL to clipboard:", error);
      });
  };
  return (
    <Dialog open={openDialog}>
      <SharemodalWrapper>
        <Box className="share-modal-header">
          <Typography variant="h6">Share Via</Typography>
          <IconButton onClick={() => setOpenDialog(false)}>
            <MdClose />
          </IconButton>
        </Box>
        <Box>
          <Box className="share-link-outer" onClick={copyUrlToClipboard}>
            <GoCopy />
            <Typography variant="h6">Copy link</Typography>
          </Box>
          <Box
            className="share-link-outer"
            component={Link}
            href="mailto:swimjim1234@gmail.com"
          >
            <MdOutlineEmail />
            <Typography variant="h6">Email</Typography>
          </Box>
          <Box className="share-link-outer">
            <LuMessageCircle />
            <Typography variant="h6">Message</Typography>
          </Box>
          <Box className="share-link-outer">
            <MdOutlineWhatsapp />
            <Typography variant="h6">WhatsApp</Typography>
          </Box>
        </Box>
      </SharemodalWrapper>
    </Dialog>
  );
}
export default ShareModal;
