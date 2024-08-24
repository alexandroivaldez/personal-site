import React, { useState } from "react";
import { TextField, Button, Box, Typography, Stack } from "@mui/material";

const MyForm: React.FC = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    // e.preventDefault();
    console.log("Form Data:", formValues);
  };

  return (
    <Stack
      component="form"
      onSubmit={handleSubmit}
      flex={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      spacing={2}
      sx={{
        width: "100%",
        margin: "0 auto",
      }}
    >
      <Typography variant="h2">Let's chat!</Typography>
      <Typography variant="h5" color={"grey"}>
        Feel free to reach out with me if you're interested in my work, have
        questions about coding or anything else in between!
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 2,
          width: "100%",
          
          margin: "0 auto",
        }}
      >
        <TextField
          label="Name"
          variant="outlined"
          name="name"
          value={formValues.name}
          onChange={handleInputChange}
          fullWidth
          required
        />
        <TextField
          label="Email"
          variant="outlined"
          name="email"
          type="email"
          value={formValues.email}
          onChange={handleInputChange}
          fullWidth
          required
        />
      </Box>
      <TextField
        label="Message"
        variant="outlined"
        name="message"
        value={formValues.message}
        onChange={handleInputChange}
        fullWidth
        multiline
        rows={4}
        required
      />
      <Button
        type="submit"
        variant="contained"
        sx={{
          backgroundColor: "#4F3FEC",
          padding: "10px 20px",
          borderRadius: "15px",
        }}
      >
        Submit
      </Button>
    </Stack>
  );
};

export default MyForm;
