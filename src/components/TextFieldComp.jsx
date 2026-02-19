import {
  Avatar,
  Box,
  Button,
  Container,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { VisibilityOff, Visibility } from "@mui/icons-material";
const TextFieldComp = () => {
  const [helper, setHelper] = useState(false);
  const [error, setError] = useState(false);
  const [show, setShow] = useState(false);
  const currencies = [
    {
      value: "USD",
      label: "$",
    },
    {
      value: "EUR",
      label: "€",
    },
    {
      value: "BTC",
      label: "฿",
    },
    {
      value: "JPY",
      label: "¥",
    },
    {
      value: "LİRA",
      label: "TL",
    },
  ];

  return (
    <Container sx={{ marginTop: 4 }}>
      <Typography>TEXT-FIELD- (İNPUT)</Typography>
      <Box sx={{ mt: 4, mb: 4 }}>
        <TextField
          id="outlined-select-currency"
          select
          label="Select"
          defaultValue="EUR"
          helperText="Please select your currency"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </Box>

      <Box sx={{ mt: 4, mb: 4 }}>
        <TextField
          sx={{ m: 3 }}
          required
          id="outlined-required"
          label="Required"
          defaultValue="Hello World"
        />
        <TextField
          margin="dense"
          id="outlined-search"
          label="Search field"
          type="search"
        />
        <TextField
          onChange={() => setHelper(true)}
          sx={{ m: 3 }}
          id="outlined-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText={helper && "Some important text"}
        />
        {/* inputa tıklandığında defaultta (variant="outlined") label, input outline çizgisinde gelir, variant=filled diyerek label ı input alanında tutabiliriz */}
        {/* variant="filled"=required yazısı kutunun border ın içinde */}
      </Box>

      <Box>
        <TextField
          sx={{ m: 3 }}
          error={error}
          id="filled-error-helper-text"
          label="Error"
          defaultValue="Hello World"
          helperText={error && "Incorrect entry."}
          variant="filled"
        />

        <TextField
          sx={{ m: 3 }}
          error
          id="standard-error-helper-text"
          label="Error"
          defaultValue="Hello World"
          helperText="Incorrect entry."
          variant="standard"
          fullWidth
        />
      </Box>

      <Box>
        <FormControl variant="standard">
          <InputLabel htmlFor="input-with-icon-adornment">
            With a start adornment
          </InputLabel>
          <Input
            id="input-with-icon-adornment"
            startAdornment={
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            }
          />
        </FormControl>
      </Box>

      <Box>
        <FormControl sx={{ m: 4, width: "25ch" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={show ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={() => setShow(!show)} edge="end">
                  {show ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>

        <Button
          fullWidth
          variant="contained"
          color="error"
          sx={{ color: "blue",gap:3 }}
        >
          SUBMIT
          <Avatar src="https://ca.slack-edge.com/TMPTG1GNP-U036J7Z9F0T-47d568f3b26c-512" />
        </Button>
      </Box>
    </Container>
  );
};

export default TextFieldComp;
