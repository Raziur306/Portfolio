import React, { useState } from 'react'
import {
    AppBar, Toolbar, Box, Stack, IconButton, Drawer, List, ListItem, ListItemText, Menu,
    MenuItem
} from '@mui/material';
import navLogo from '../assets/icon_white.svg'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

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

    return <AppBar className='appbar' justifyContent={'center'} elevation={0} position='static'  >
        <Toolbar className='toolbar' sx={{ justifyContent: "space-between" }}>
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
                    <MenuItem sx={{ bgcolor: 'transparent' }} onClick={handleMenuClose}>
                        <Link disableUnderline style={{ textDecoration: 'none', color: location.pathname === '/' ? "#B975CC" : "white" }} to='/'>
                            <span>#</span>home
                        </Link>
                    </MenuItem>
                    <MenuItem sx={{ bgcolor: 'transparent' }} onClick={handleMenuClose}>
                        <Link disableUnderline style={{ textDecoration: 'none', color: location.pathname === '/projects' ? "#B975CC" : "white" }} to='/projects'>
                            <span >#</span>projects
                        </Link>
                    </MenuItem>
                    <MenuItem sx={{ bgcolor: 'transparent' }} onClick={handleMenuClose}>
                        <Link disableUnderline style={{ textDecoration: 'none', color: location.pathname === '/about' ? "#B975CC" : "white" }} to='/about'>
                            <span>#</span>about-me
                        </Link>
                    </MenuItem>
                    <MenuItem sx={{ bgcolor: 'transparent' }} onClick={handleMenuClose}>
                        <Link disableUnderline style={{ textDecoration: 'none', color: location.pathname === '/contact' ? "#B975CC" : "white" }} to='/contact'>
                            <span>#</span>contact
                        </Link>
                    </MenuItem>
                </Menu>
            </Box>

            <Box className='large_toolbar_box' sx={{ display: { xs: 'none', sm: 'flex' }, gap: 2 }} >
                <Link disableUnderline style={{ textDecoration: 'none', color: location.pathname === '/' ? "#B975CC" : "white" }} to='/'>
                    <span>#</span>home
                </Link>
                <Link disableUnderline style={{ textDecoration: 'none', color: location.pathname === '/projects' ? "#B975CC" : "white" }} to='/projects'>
                    <span >#</span>projects
                </Link>
                <Link disableUnderline style={{ textDecoration: 'none', color: location.pathname === '/about' ? "#B975CC" : "white" }} to='/about'>
                    <span>#</span>about-me
                </Link>
                <Link disableUnderline style={{ textDecoration: 'none', color: location.pathname === '/contact' ? "#B975CC" : "white" }} to='/contact'>
                    <span>#</span>contact
                </Link>
            </Box>

        </Toolbar>
    </AppBar >

}

export default NavBar