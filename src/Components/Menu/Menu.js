import {

  Typography,
  Box,
  Paper,
} from "@material-ui/core";
import MenuItem from "./MenuItem/MenuItem";

import styles from "./Menu.module.css";
import { useEffect, useState } from "react";

const Menu = () => {
  const [menuListArray, setMenuListArray] = useState([]);

  useEffect(() => {
    setMenuListArray([
      {
        MenuItemTitle: "Dango",
        MenuItemDesc:
          "a small, sticky, sweet dumpling, commonly skewered on a stick",
        MenuItemPrice: "30",
      },

      {
        MenuItemTitle: "Kompeito",
        MenuItemDesc: "A crystal sugar candy",
        MenuItemPrice: "10",
      },

      {
        MenuItemTitle: "Taiyaki",
        MenuItemDesc: "Fish shaped cake with a sweet filling",
        MenuItemPrice: "60",
      },
    ]);
  }, []);

  let readyArray = menuListArray.map((menuItem) => (
    <Box p={1} key={menuItem.MenuItemTitle}>
      <MenuItem
        MenuItemTitle={menuItem.MenuItemTitle}
        MenuItemDesc={menuItem.MenuItemDesc}
        MenuItemPrice={menuItem.MenuItemPrice}
      />
      <hr />
    </Box>
  ));

  return (
    <Paper>
      <Box width="70%" p={2} mx="10%">
        <Typography variant="h4" component="h2" align="center">
          Menu
        </Typography>

        <ul className={styles.MenuList}>{readyArray}</ul>
        <div>
          Favicon made by{" "}
          <a
            href="https://www.flaticon.com/authors/smashicons"
            title="Smashicons">
            Smashicons
          </a>{" "}
          from{" "}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </div>
      </Box>
    </Paper>
  );
};

export default Menu;
