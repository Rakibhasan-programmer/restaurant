import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Food Garden
                        </Typography>
                        <Typography variant="p" component="div" sx={{ pr: 3 }} >
                            <NavLink to='/home'>Home</NavLink>
                        </Typography>
                        <Typography variant="p" component="div" sx={{ pr: 3 }}>
                            <NavLink to='/restaurant'>Food Item</NavLink>
                        </Typography>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    );
};

export default Navbar;