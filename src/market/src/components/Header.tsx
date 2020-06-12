import React, { FunctionComponent } from "react";
import { AppBar, Toolbar, Typography, Grid } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import "./../styles/App.scss";

import { Link } from "react-router-dom";

export const Header: FunctionComponent = () => {
    const reload = (path: string) => {
      if (path == window.location.pathname){
        window.location.reload();
      }
    }

    return (
      <AppBar position="static">
          <Toolbar>
            <Grid container justify="center">
              <Grid item container xs={12} sm={3} justify="center">
                <Link className="navbar-item" to={{ pathname: "/" }} onClick={() => {if ("/" == window.location.pathname){window.location.reload();}}}>
                  <Typography style={{ fontSize: '20px' }}>Marketplace</Typography>
                </Link>
              </Grid>
              <Grid item container xs={12} sm={3} justify="center">
                <Link className="navbar-item" to={{ pathname: "/addoffer" }} onClick={() => {if ("/addoffer" == window.location.pathname){window.location.reload();}}}>
                   <Typography style={{ fontSize: '20px' }}><AddIcon style={{ fontSize: '17' }} /> Add Offer</Typography>
                </Link>
              </Grid>
              <Grid item container xs={12} sm={3} justify="center">
                <Link className="navbar-item" to={{ pathname: "/categories" }} onClick={() => {if ("/categories" == window.location.pathname){window.location.reload();}}}>
                  <Typography style={{ fontSize: '20px' }}>Categories</Typography>
                </Link>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
    );
}
