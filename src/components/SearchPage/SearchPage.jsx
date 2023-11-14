import React, { useState } from "react";
import {
  ThemeProvider,
  createTheme,
  Container,
  Typography,
  Button,
  Box,
  Modal as MuiModal,
} from "@mui/material";
import Navbar from "./Navbar"; // Assume Navbar is MUI compatible
import Modal from "./Modal"; // Assume ModalContent is a component using MUI
import TermSelection from "./TermSelection"; // Assume TermSelection uses MUI
import DropdownMenu from "./DropdownMenu"; // Assume DropdownMenu uses MUI
import ClassPicker from "./ClassPicker"; // Assume ClassPicker uses MUI
import ClearSearch from "./ClearSearch"; // Assume ClearSearch uses MUI
import { TermProvider } from "./TermContext"; // Assume TermContext is a React context
import "./SearchPage.css";

// Create a Material-UI theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#333",
    },
    // Add additional colors and settings as needed.
  },
  // Add component overrides and other global settings as needed.
});

function SearchPage() {
  const [openModal, setOpenModal] = useState(false);

  // Style for MUI Modal
  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "auto",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <Navbar />
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" gutterBottom>
            Preview Schedule
          </Typography>
          <Button
            variant="contained"
            onClick={() => setOpenModal(true)}
            sx={{ borderRadius: 2 }}
          >
            Schedule
          </Button>
          <MuiModal
            open={openModal}
            onClose={() => setOpenModal(false)}
            aria-labelledby="modal-title"
          >
            <Box sx={modalStyle}>
              <Modal closeModal={setOpenModal} />
            </Box>
          </MuiModal>
        </Box>
        <TermProvider>
          <TermSelection />
          <DropdownMenu />
          <ClassPicker />
          <ClearSearch />
        </TermProvider>
      </Container>
    </ThemeProvider>
  );
}

export default SearchPage;
