import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';

export const Header = () => {

  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <Typography variant="title" color="inherit" style={ { marginRight: '100px' } }>
          Mars Rover Photo Explorer
        </Typography>

        <Button component={Link} color="inherit" variant="text" to="/">
          Search
        </Button>

        <Button component={Link} color="inherit" variant="text" to="/bookmarks">
          Bookmarks
        </Button>

      </Toolbar>
    </AppBar>
  );
};