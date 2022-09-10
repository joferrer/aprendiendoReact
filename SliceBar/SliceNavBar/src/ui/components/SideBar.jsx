
import { MenuOutlined,Email, Menu, MoveToInbox  } from "@mui/icons-material";
import { AppBar, Box, CssBaseline, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material";
import { useState } from "react";

const drawerWidth = 240;



const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <MoveToInbox /> : <Email />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <MoveToInbox /> : <Email />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );


export const SideBar = ({window}) => {

    const container = window !== undefined ? () => window().document.body : undefined;

    const [open, setOpen] = useState(false);


    const handleDrawerToggle = () => {
        setOpen(!open);
      };

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };



  return (
    <Box sx={{ display: 'flex', backgroundColor: 'primary' }}>
        <CssBaseline/>
        <AppBar 
            position="fixed" 
            open={open}
            sx={{
                width: { sm: `calc(100% - ${drawerWidth}px)` },
                ml: { sm: `${drawerWidth}px` },
              }}
            >
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, display: { sm: 'none' } }}
                >
                    <MenuOutlined/>
                </IconButton>
                <Typography variant="h6" noWrap component="div">
                      Responsive drawer
                </Typography>
            </Toolbar>
        </AppBar>

        <Box
            component= "nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
            aria-label="mailbox folders"
        >
            {/**
             * Este pedaso es el que se usa cuando el menu se retrae.
             */}
            <Drawer
                container={container}
                variant="temporary"
                open={open}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
                >
                   {drawer}
                    
            </Drawer>

            {/**
             * Este pedaso es el que se usa cuando esta en modo pantalla completa.
             */}
            <Drawer
                variant="permanent"
                sx={{
                    display: { xs: 'none', sm: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
                open
                >
                {drawer}
            </Drawer>
        </Box>
    </Box>
  )
}
