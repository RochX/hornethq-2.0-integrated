import React, { Component } from "react";
import axios from "axios";
import {
  CircularProgress,
  Typography,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
} from "@mui/material";

export default class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentData: null,
      offerings: null,
      isLoading: true,
      error: null,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    try {
      const studentResponse = await axios.get(
        "https://hhqv2backend.vercel.app/api/student"
      );
      const offeringsResponse = await axios.get(
        "https://hhqv2backend.vercel.app/api/offering"
      );

      const studentId = localStorage.getItem("student_id");
      const studentData = studentResponse.data.find(
        (student) => student.student_id === studentId
      );
      const offerings = offeringsResponse.data;

      if (studentData) {
        this.setState({ studentData, offerings, isLoading: false });
      } else {
        throw new Error("Student data not found");
      }
    } catch (error) {
      console.error("Error fetching data: ", error);
      this.setState({ error, isLoading: false });
    }
  };

  getOfferingName = (offeringId) => {
    const { offerings } = this.state;
    const offering = offerings.find((off) => off.offering_id === offeringId);
    return offering ? offering.name : offeringId;
  };

  render() {
    const { studentData, isLoading, error } = this.state;

    if (isLoading) {
      return (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100vh"
        >
          <CircularProgress />
        </Box>
      );
    }

    if (error) {
      return (
        <Container>
          <Typography variant="h6" color="error" style={{ marginTop: 20 }}>
            {error.message}
          </Typography>
        </Container>
      );
    }

    return (
      <Container maxWidth="sm" style={{ marginTop: 20 }}>
        <Paper elevation={3} style={{ padding: 20 }}>
          <Typography variant="h4" color="primary" gutterBottom>
            Profile
          </Typography>
          <Box mb={2}>
            <Typography variant="subtitle1">
              <b>Name:</b> {studentData?.name}
            </Typography>
            <Typography variant="subtitle1">
              <b>Student ID:</b> {studentData?.student_id}
            </Typography>
            <Typography variant="subtitle1">
              <b>Year:</b> {studentData?.year}
            </Typography>
            <Typography variant="subtitle1">
              <b>Transfer Student:</b> {studentData?.transfer ? "Yes" : "No"}
            </Typography>
          </Box>
          <Typography variant="h5" color="secondary" gutterBottom>
            Enrollments
          </Typography>
          {studentData?.enrollment && Array.isArray(studentData.enrollment) ? (
            <TableContainer component={Paper}>
              <Table aria-label="enrollment table">
                <TableHead>
                  <TableRow>
                    <TableCell>Course</TableCell>
                    <TableCell align="right">Grade</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {studentData.enrollment.map((course) => (
                    <TableRow key={course.offering_id}>
                      <TableCell component="th" scope="row">
                        {this.getOfferingName(course.offering_id)}
                      </TableCell>
                      <TableCell align="right">{course.grade}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          ) : (
            <Typography variant="body1">
              No enrollment data available.
            </Typography>
          )}
        </Paper>
      </Container>
    );
  }
}
