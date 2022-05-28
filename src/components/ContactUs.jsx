
import {
  Typography,
  AppBar,
  Toolbar,
  TextField,
  Button,
  Box
} from "@mui/material";
import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
export default function ContactUs() {
  return (
    <div className="contactus">

      <Typography variant="h5">Please fill the form so we can contact You</Typography>
      <form>
        <TextField
          style={{ width: "200px", margin: "5px" }}
          type="text"
          label="Name"
          variant="outlined"
        />
        <br />
        <TextField
          style={{ width: "200px" }}
          type="number"
          label="Email"
          variant="outlined"
        />
        <br />
        <TextField
          style={{ width: "200px", margin: "5px" }}
          type="text"
          label="Phone Number"
          variant="outlined"
        />
        <br />
        <TextField
          style={{ width: "200px", margin: "5px" }}
          type="text"
          label="Address"
          variant="outlined"
        />
        <br />
        <TextField
          style={{ width: "200px", margin: "5px" }}
          type="text"
          label="Intrest of Contact"
          variant="outlined"
        />
        <br/>
        <Button sx={{alignItems:'centre'}}variant="contained" color="primary">
          save
        </Button>
      </form>
    </div>
  );
}
