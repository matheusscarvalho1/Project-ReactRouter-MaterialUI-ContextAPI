import * as React from 'react';
import { useState } from 'react'

import { AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
     } from '@mui/material';

import { useNavigate } from 'react-router-dom';


import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import UserIconAdd from '@mui/icons-material/PersonAdd';


const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()


  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const handleMenuClick = route => {
    navigate(route)
    handleToggleMenu()
  }

    return (
        <>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={() => handleToggleMenu()}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                My App
              </Typography>
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
            <Drawer open={menuOpen} onClose={() => handleToggleMenu(false)}>
              <List>
                <ListItem button onClick={() => handleMenuClick('/')}>
                  <ListItemIcon>
                    <HomeIcon/>
                  </ListItemIcon> 
                  <ListItemText>Home</ListItemText>
                </ListItem>
                <ListItem button onClick={() => handleMenuClick('/customers')}>
                  <ListItemIcon>
                    <UserIconAdd/>
                  </ListItemIcon> 
                  <ListItemText>Cadastro de Clientes</ListItemText>
                </ListItem>
              </List>
            </Drawer>
        </>
    )
}

export default Header