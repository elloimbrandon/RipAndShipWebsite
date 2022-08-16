// *** packages ***
// (React Router) react-router-dom@6
// (Axios) axios
// (Material UI) @mui/material @emotion/react @emotion/styled
// (Material UI Inventory Svg) @mui/icons-material/Inventory
// (Tailwind CSS) -D tailwindcss postcss autoprefixer
// (Tailwind CSS) npx tailwindcss init -p

import "./App.css";
// import { Link, Outlet } from "react-router-dom";
import Button from "@mui/material/Button";
import InventoryIcon from "@mui/icons-material/Inventory";
import {
  ButtonGroup,
  createTheme,
  // IconButton,
} from "@mui/material";
// import { orange } from "@mui/material/colors";
// import { useState } from "react";
import NavBar from "./Components/NavBar";
import BannerText from "./Components/BannerText";

// const axios = require("axios");

// const useStyles = makeStyles({
//   root: {
//     background: "linear-gradient(45deg, #FE6B8B, #FF8E53)",
//     padding: "5px 30px",
//   },
// });

// function MenuStyled() {
//   const classes = useStyles();
//   return <MenuIcon className={classes.root} />;
// }

// const theme = createTheme({
//   palette: {
//     primary: {
//       light: "#757ce8",
//       main: "#3f50b5",
//       dark: "#002884",
//       contrastText: "#fff",
//     },
//     secondary: {
//       light: "#ff7961",
//       main: "#f44336",
//       dark: "#ba000d",
//       contrastText: "#000",
//     },
//   },
// });

function App() {
  return (
    // work on header across all pages

    // remember items center
    // change height at some point probably

    <>
      {/* <div className="flex flex-col overflow-hidden h-screen border w-full"> */}
      <NavBar />
      <BannerText />
      <div className="flex flex-col items-center align-center h-full justify-center border">
        <h1 className="text-3xl">Hello World!</h1>
        <ButtonGroup>
          <Button variant="contained">CashApp</Button>
          <Button variant="contained">PayPal</Button>
          <Button variant="contained">Venmo</Button>
        </ButtonGroup>
        <Button
          className="w-1/2"
          endIcon={<InventoryIcon />}
          href="/inventory"
          variant="contained"
          color="secondary"
          size="large"
        >
          Inventory
        </Button>
      </div>
      {/* </div> */}
    </>
  );
}

export default App;

// ** Graveyard
// <Link to="inventory">
//   <Button variant="contained" color="secondary">
//     Inventory
//   </Button>
// </Link>
// <Outlet />
