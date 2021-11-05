import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { styles } from "./style.js";
import {
  withStyles,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
} from "@material-ui/core";
import { ImportContacts } from "@material-ui/icons";
import { connect } from "react-redux";
import { Fragment } from "react";

class Header extends Component {
  render() {
    const { title, navLink, activeNavLink } = this.props.classes;
    return (
      <div className="Header">
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <ImportContacts />
            </IconButton>
            <Typography className={title} variant="h6">
              E-Learning
            </Typography>
            <NavLink
              activeClassName={activeNavLink}
              exact
              className={navLink}
              to="/"
            >
              Home
            </NavLink>

            {/* check dang nhap */}
            {this.props.me ? (
              <span className={`${activeNavLink} ${navLink}`}>
                Hello, {this.props.me.hoTen}
              </span>
            ) : (
              <Fragment>
                <NavLink
                  activeClassName={activeNavLink}
                  className={navLink}
                  to="/signin"
                >
                  Sign in
                </NavLink>
                <NavLink
                  activeClassName={activeNavLink}
                  className={navLink}
                  to="/signup"
                >
                  Sign Up
                </NavLink>
              </Fragment>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ me: state.me });

export default connect(mapStateToProps)(withStyles(styles)(Header));
