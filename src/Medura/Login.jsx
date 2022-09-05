import {
  Box,
  Button,
  Checkbox,
  FormControl,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import React, { useContext, useState } from "react";
import { Login_div } from "./Medura.styled";
import Routes_file from "./Routes_file";
import { Auth_provider_context } from "./Auth_login/Auth_provider";

const Login = () => {
  const { token, setToken } = useContext(Auth_provider_context);
  console.log("token:", token);
  const [porfiledata, setPorfileData] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const Login_func = async (porfiledata) => {
    console.log("porfiledata:", porfiledata);
    let loginData = JSON.stringify({
      email: "eve.holt@reqres.in",
      password: "cityslicka",
    });
    try {
      let res = await fetch("https://reqres.in/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: loginData,
      });

      let data = await res.json();
      console.log("data:", data);
      setToken(data.token);
      localStorage.setItem("token", data.token);
    } catch (err) {
      console.log("error:", err);
    }
  };

  return (
    <Login_div>
      <Routes_file />
      <div>
        {!token ? (
          <div>
            <h1>Login</h1>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                name="email"
                type="text"
                onChange={(e) => {
                  setPorfileData({
                    ...porfiledata,
                    [e.target.name]: e.target.value,
                  });
                }}
              />

              <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>

                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  onChange={(e) => {
                    setPorfileData({
                      ...porfiledata,
                      [e.target.name]: e.target.value,
                    });
                  }}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
            </Box>

            <div>
              <Checkbox
                {...label}
                defaultChecked
                sx={{ "& .MuiSvgIcon-root": { fontSize: 20 } }}
              />
              Remember me
            </div>

            <Button
              variant="contained"
              color="primary"
              style={{ width: "18%", maxWidth: "300px" }}
              onClick={() => {
                Login_func(porfiledata);
              }}
            >
              Login
            </Button>
          </div>
        ) : (
          <div>
            <h1>Hi {porfiledata.email}</h1>
            <Button
              variant="contained"
              color="primary"
              style={{ width: "18%", maxWidth: "300px" }}
              onClick={() => {
                setToken("");
                localStorage.removeItem("token");
              }}
            >
              Logout
            </Button>
          </div>
        )}
      </div>
    </Login_div>
  );
};

export default Login;
