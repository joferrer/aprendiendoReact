import { TurnedInNot } from "@mui/icons-material"
import { Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material"
import { Box } from "@mui/system"


export const SideBar = ({ drawerWidth= 240}) => {
    return (

        <Box
            component = 'nav'
            sx = {{width: {sm: drawerWidth }, flexShrink: { sm: 0 } }}
        >

            <Drawer
                variant ='permanent'
                open
                sx={{
                    display: {xs: 'block'},
                    '& .MuiDrawer-paper': {boxSizing: 'border-box' , width: drawerWidth}
                }}
            >

                <Typography 
                    variant="h6"
                    noWrap
                    component='div'
                >
                    Jeison Ferrer
                </Typography>

                <Divider/>

                <List>
                    {
                        ['Enero','Febrero','Marzo','Abril'].map( text => 
                            (<ListItem key={text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <TurnedInNot/>
                                    </ListItemIcon>
                                    <Grid>
                                        <ListItemText primary= {text}/>
                                        <ListItemText secondary= {'Un texto segundario de descripción'}/>
                                    </Grid>
                                </ListItemButton>
                            </ListItem>)
                        )
                    }

                </List>


            </Drawer>

        </Box>
            
    )
}
