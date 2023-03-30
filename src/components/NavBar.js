import React, { useState } from 'react'
import {
    AppBar, Toolbar, Box, Stack, IconButton, Drawer, List, ListItem, ListItemText, Menu,
    MenuItem,
    CssBaseline
} from '@mui/material';
import navLogo from '../assets/icon_dark.svg'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { Container } from '@mui/system';

function NavBar() {
    const location = useLocation()
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return <AppBar justifyContent={'center'} elevation={0} position='static'  >
        <Toolbar sx={{ justifyContent: "space-between", bgcolor: 'white' }}>
            <Link to='/' edge='start' size='small' color='inherit'>
                <img src={navLogo} alt="Web Logo" />
            </Link>

            <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
                <IconButton
                    size='large'
                    edge='end'
                    aria-label='menu'
                    aria-controls='menu-appbar'
                    aria-haspopup='true'
                    onClick={handleMenuOpen}
                    color='secondary'
                >
                    <MenuIcon />
                </IconButton>
                <Menu
                    id='menu-appbar'
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={open}
                    onClose={handleMenuClose}
                >
                    <MenuItem onClick={handleMenuClose}>
                        <Link to='/' color='inherit' underline='none'>
                            <span>#</span>home
                        </Link>
                    </MenuItem>
                    <MenuItem onClick={handleMenuClose}>
                        <Link to='/projects' color='inherit' underline='none'>
                            <span>#</span>projects
                        </Link>
                    </MenuItem>
                    <MenuItem onClick={handleMenuClose}>
                        <Link to='/about' color='inherit' underline='none'>
                            <span>#</span>about-me
                        </Link>
                    </MenuItem>
                    <MenuItem onClick={handleMenuClose}>
                        <Link to='/contact' color='inherit' underline='none'>
                            <span>#</span>contact
                        </Link>
                    </MenuItem>
                </Menu>
            </Box>

            <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 2 }} >
                <Link disableUnderline style={{ textDecoration: 'none', color: location.pathname === '/' ? "#B975CC" : "gray" }} to='/'>
                    <span>#</span>home
                </Link>
                <Link disableUnderline style={{ textDecoration: 'none', color: location.pathname === '/projects' ? "#B975CC" : "gray" }} to='/projects'>
                    <span>#</span>projects
                </Link>
                <Link disableUnderline style={{ textDecoration: 'none', color: location.pathname === '/about' ? "#B975CC" : "gray" }} to='/about'>
                    <span>#</span>about-me
                </Link>
                <Link disableUnderline style={{ textDecoration: 'none', color: location.pathname === '/contact' ? "#B975CC" : "gray" }} to='/contact'>
                    <span>#</span>contact
                </Link>
            </Box>

        </Toolbar>
    </AppBar >

}

export default NavBar