import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

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
    e.preventDefault();
    console.log("Form Data:", formValues);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        width: "100%",
        margin: "0 auto",
      }}
    >
      <Box sx={{
        display: "flex",
        flexDirection: "row",
        gap: 2,
        width: "100%",
        margin: "0 auto",
      }}>
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
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </Box>
  );
};

export default MyForm;
