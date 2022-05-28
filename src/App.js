
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import Navbar from "./components/Navbar";
import './App.scss';
import { useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Academies from "./components/Academies";
import Landing from "./components/Landing";
import HealthFood from "./components/HealthFood";
import Nutritionist from "./components/Nutritionist";
import SportsGoods from "./components/SportsGoods";
import Home from "./components/Home";
import ContactUs from "./components/ContactUs";
function App() {
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        
        <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/academies" element={<Academies/>}></Route>
        <Route path="/nutritionist" element={<Nutritionist/>}></Route>
        <Route path="/sportsgoods" element={<SportsGoods/>}></Route>
        <Route path="/healthfood" element={<HealthFood/>}></Route>
        <Route path="/contactus" element={<ContactUs/>}></Route>
        </Routes>
        </BrowserRouter>
      </Box>
    </ThemeProvider>
  );
}

export default App;
