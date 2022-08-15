import "../App.css";
import { AppBar, Toolbar, Box, Menu, MenuItem } from "@mui/material";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import InventoryIcon from "@mui/icons-material/Inventory";
import { useState } from "react";
import BannerText from "./BannerText";

const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };
  const openMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  return (
    <>
      <div className="mb-28">
        <AppBar
          position="fixed"
          className="border-t border-r border-l w-screen"
        >
          <Toolbar className="h-20">
            <Box display="flex" flexGrow={1}>
              <div>
                <h1>PokemonKidwiththeHits</h1>
                <h1>Hello</h1>
              </div>
            </Box>
            <Button variant="contained" onClick={openMenu}>
              <MenuIcon />
            </Button>
            <Menu
              id="lame-menu"
              anchorEl={anchorEl}
              KeepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
              className="mt-2"
            >
              {/* do I need handle close here? */}
              <MenuItem>
                <Button
                  href="/inventory"
                  variant="textSuccess"
                  endIcon={<InventoryIcon />}
                >
                  Inventory
                </Button>
              </MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
      </div>
      <BannerText />
    </>
  );
};

export default NavBar;
