import React from "react";
import { GridItem, Grid } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

const Layout = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav" "main"`,
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <GridItem area="main">
        <Outlet />
      </GridItem>
    </Grid>
  );
};

export default Layout;
