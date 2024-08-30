import { AppBar, Avatar, Box, Divider, Grid, IconButton, InputAdornment, Menu, MenuItem, Paper, Popover, TextField, Tooltip, Typography } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import GroupsIcon from '@mui/icons-material/Groups';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import FeedbackIcon from '@mui/icons-material/Feedback';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import { useState } from "react";

export default function Header({theme, page}) {
    const navigate = useNavigate();
    const [accountMenuOpen, setAccountMenuOpen] = useState(false);
    const [notificationsOpen, setNotificationsOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleOpenAccountMenu = (event) => {
        setAnchorEl(event.currentTarget);
        setAccountMenuOpen(true);
    }
    const handleCloseAccountMenu = () => {
        setAnchorEl(null);
        setAccountMenuOpen(false);
    }

    const handleOpenNotifications = (event) => {
        setAnchorEl(event.currentTarget);
        setNotificationsOpen(true);
    }
    const handleCloseNotifications = () => {
        setAnchorEl(null);
        setNotificationsOpen(false);
    }

    return (
        <>
            <AppBar elevation={3} sx={{py: 1, px: 3, bgcolor: theme.palette.background.paper}}>
                <Grid container>
                    <Grid item xs={4} sx={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        gap: '10px'
                    }}>     
                        <Box component="img" alt="FlexNet" src="../gorilla.svg" sx={{maxHeight: '56px', mr: 1, cursor: 'pointer'}} onClick={() => navigate("/")}/>
                        <TextField id="search"  variant="outlined" type="search" placeholder="Search on FlexNet" InputProps={{
                            startAdornment:
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                        }}/>
                    </Grid>
                    <Grid item xs={4} sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '30px'
                    }}>   
                        <Tooltip title="Home">
                            <IconButton onClick={() => navigate("/")}>
                                <HomeIcon fontSize="large" sx={{color: page === "home" && theme.palette.primary.main}}/>
                            </IconButton>
                        </Tooltip>  
                        <Tooltip title="Friends">
                            <IconButton onClick={() => navigate("/friends")}>
                                <PeopleIcon fontSize="large" sx={{color: page === "friends" && theme.palette.primary.main}}/>
                            </IconButton>
                        </Tooltip>  
                        <Tooltip title="Groups">
                            <IconButton onClick={() => navigate("/groups")}>
                                <GroupsIcon fontSize="large" sx={{color: page === "groups" && theme.palette.primary.main}}/>
                            </IconButton>
                        </Tooltip>  
                    </Grid>
                    <Grid item xs={4} sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                        gap: '10px'
                    }}>     
                        <Tooltip title="Notifications">
                            <IconButton onClick={handleOpenNotifications}>
                                <NotificationsIcon fontSize="large"/>
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="My Account">
                            <IconButton onClick={handleOpenAccountMenu}>
                                <Avatar>H</Avatar>
                            </IconButton>
                        </Tooltip>
                    </Grid>
                </Grid>
            </AppBar>
            <Menu 
                anchorEl={anchorEl}
                open={accountMenuOpen}    
                onClose={handleCloseAccountMenu}   
            >                
                <Typography variant="h5" sx={{fontWeight: 600, p: 2}}>My Account</Typography>
                <MenuItem onClick={handleCloseAccountMenu} sx={{p: 2}}>
                    <Avatar>H</Avatar>
                    <Box sx={{display: 'flex', flexDirection: 'column'}}>
                    <Typography variant="p" sx={{ml: 1.5, fontWeight: 600}}>Brian Brian</Typography>
                    <Typography variant="subtitle2" sx={{ml: 1.5, color: theme.palette.grey[500]}}>View Profile</Typography>
                    </Box>
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleCloseAccountMenu} sx={{width: '300px', p: 2}}>
                    <SettingsIcon />
                    <Typography variant="p" sx={{ml: 1.5}}>Settings</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseAccountMenu} sx={{p: 2}}>
                    <FeedbackIcon />
                    <Typography variant="p" sx={{ml: 1.5}}>Send Feedback</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseAccountMenu} sx={{p: 2}}>
                    <LogoutIcon />
                    <Typography variant="p" sx={{ml: 1.5}}>Log Out</Typography>
                </MenuItem>
            </Menu>

            <Menu                
                anchorEl={anchorEl}
                open={notificationsOpen}
                onClose={handleCloseNotifications}                      
            >
                <Typography variant="h5" sx={{fontWeight: 600, p: 2}}>Notifications</Typography>
                <MenuItem sx={{whiteSpace: 'normal', wordBreak: 'break-word', width: '400px', p: 2}}>
                    <Avatar>H</Avatar>
                    <Typography variant="p" sx={{ml: 1.5}}>Brian Brian commented on your post.</Typography>
                </MenuItem>
                <MenuItem sx={{whiteSpace: 'normal', wordBreak: 'break-word', width: '400px', p: 2}}>
                    <Avatar>H</Avatar>
                    <Typography variant="p" sx={{ml: 1.5}}>Brian Brian commented on your post in the Fitness Tips.</Typography>
                </MenuItem>
                <MenuItem sx={{whiteSpace: 'normal', wordBreak: 'break-word', width: '400px', p: 2}}>
                    <Avatar>H</Avatar>
                    <Typography variant="p" sx={{ml: 1.5}}>Brian Brian commented on your post.</Typography>
                </MenuItem>
                <MenuItem sx={{whiteSpace: 'normal', wordBreak: 'break-word', width: '400px', p: 2}}>
                    <Avatar>H</Avatar>
                    <Typography variant="p" sx={{ml: 1.5}}>Brian Brian commented on your post.</Typography>
                </MenuItem>

            </Menu>
        </>
    )
}