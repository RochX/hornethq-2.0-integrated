import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { styled } from "@mui/system";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import Snackbar from "@mui/material/Snackbar";
import SnackbarContent from "@mui/material/SnackbarContent";
import IconButton from "@mui/material/IconButton";
import ErrorIcon from "@mui/icons-material/Error";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CloseIcon from "@mui/icons-material/Close";
import KColorImage from "../../KColor.png";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { PaletteOptions } from "@mui/material/styles/createPalette";
import Home from "../Home";

interface CustomPaletteOptions extends PaletteOptions {
  deepOrange?: {
    main: string;
  };
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#ff5722",
    },
    secondary: {
      main: "#ff5722",
    },
    deepOrange: {
      main: "#ff5722",
    },
  } as CustomPaletteOptions,
});

const FormContainer = styled("form")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  margin: "auto",
  "& .MuiTextField-root": {
    margin: theme.spacing(1, 0),
  },
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  marginTop: theme.spacing(8),
  margin: "249px auto 0 auto",
  display: "flex",
  width: "300px",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: theme.spacing(2),
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  margin: theme.spacing(1),
  backgroundColor: theme.palette.secondary.main,
}));

const StudentLogin = () => {
  const [studentId, setStudentId] = useState("");
  const [loginError, setLoginError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStudentId(e.target.value);
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!studentId) {
      setLoginError("Student ID is required");
      return;
    }

    const apiEndpoint = "https://hhqv2backend.vercel.app/api/student"; // Endpoint that returns all students

    try {
      const response = await fetch(apiEndpoint);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const students = await response.json();

      const studentExists = students.some(
        (student: { student_id: string }) => student.student_id === studentId
      );

      if (studentExists) {
        setSuccessMessage("Logged in successfully");
        localStorage.setItem("student_id", studentId);
        setLoginError(null);
        setIsLoggedIn(true);
      } else {
        setLoginError("Student ID not found");
        setSuccessMessage(null);
        setIsLoggedIn(false);
      }
    } catch (error) {
      console.error("Error during login:", error);
      setLoginError("Failed to login");
      setSuccessMessage(null);
      setIsLoggedIn(false);
    }
  };
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      setTimeout(() => navigate("/home"), 5000); // Redirect after 5 seconds
    }
  }, [isLoggedIn, navigate]);

  const handleCloseSnackbar = () => {
    setLoginError(null);
    setSuccessMessage(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <StyledPaper>
        <StyledAvatar>
          <img
            src={KColorImage}
            alt="K Color"
            style={{ width: "25px", height: "25px" }}
          />
        </StyledAvatar>
        <Typography component="h1" variant="h5">
          Student Login
        </Typography>
        <FormContainer onSubmit={handleLogin}>
          <TextField
            label="Student ID"
            name="student_id"
            value={studentId}
            onChange={handleChange}
            required
            fullWidth
          />
          <Button
            type="submit"
            color="primary"
            variant="contained"
            fullWidth
            sx={{ mt: 2 }}
          >
            Login
          </Button>
        </FormContainer>
        <Snackbar
          open={!!loginError || !!successMessage}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
        >
          <SnackbarContent
            message={
              <div style={{ display: "flex", alignItems: "center" }}>
                {loginError ? (
                  <>
                    <ErrorIcon style={{ marginRight: "8px" }} color="error" />
                    {loginError}
                  </>
                ) : (
                  <>
                    <CheckCircleIcon
                      style={{ marginRight: "8px" }}
                      color="success"
                    />
                    {successMessage}
                  </>
                )}
              </div>
            }
            action={
              <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleCloseSnackbar}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            }
          />
        </Snackbar>
      </StyledPaper>
    </ThemeProvider>
  );
};

export default StudentLogin;
