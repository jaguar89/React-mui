import { Avatar, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import Drawer from '@mui/material/Drawer';
import NotesIcon from '@mui/icons-material/Notes';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { useLocation, useNavigate } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

const Layout = ({ children }) => {

    const drawerWidth = 240;
    const navigate = useNavigate();
    const location = useLocation();

    const menuItems = [
        {
            item: 'All Notes',
            path: '/',
            icon: <NotesIcon />
        },
        {
            item: 'Create New Note',
            path: '/create',
            icon: <BorderColorIcon />
        }

    ];

    return (

        <div style={{ display: 'flex' }}>

            {/* Appbar */}
            <AppBar elevation={1} sx={{
                width: `calc(100% - ${drawerWidth}px)`
            }}>
                <Toolbar>
                    <Typography color='textSecondary' sx={{ flexGrow: 1 }}>
                        {new Date().toLocaleDateString()}
                    </Typography>
                    <Typography color='textSecondary'>
                        Mario
                    </Typography>
                    <Avatar sx={{ marginLeft: 1 }} src='' />
                </Toolbar>

            </AppBar>

            {/* Drawer */}
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                <Typography
                    variant="h5"
                    color='textSecondary'
                    sx={{
                        padding: 3
                    }}
                >
                    Sakkour Notes
                </Typography>
                <List>
                    {
                        menuItems.map(menu => (
                            <ListItem
                                sx={{ backgroundColor: (location.pathname === menu.path) ? '#f4f4f4' : '' }}
                                button
                                onClick={() => navigate(menu.path)}
                                key={menu.item}>
                                <ListItemIcon>
                                    {menu.icon}
                                </ListItemIcon>
                                <ListItemText primary={menu.item} />
                            </ListItem>
                        ))
                    }
                </List>
            </Drawer>

            <div style={{
                backgroundColor: '#f9f9f9',
                padding: 3,
                width: '100%'
            }}>
                <div style={{ height: 75 }}></div>
                {children}
            </div>
        </div>
    );
}

export default Layout;