import { AppBar, Avatar, Box, Divider, Grid, IconButton, InputAdornment, Menu, MenuItem, Paper, TextField, Typography } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import HandshakeIcon from '@mui/icons-material/Handshake';
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
    const [anchorEl, setAnchorEl] = useState(null);

    const handleOpenAccountMenu = (event) => {
        setAnchorEl(event.currentTarget);
        setAccountMenuOpen(true);
    }
    const handleCloseAccountMenu = () => {
        setAnchorEl(null);
        setAccountMenuOpen(false);
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
                        <IconButton onClick={() => navigate("/")}>
                            <HomeIcon fontSize="large" sx={{color: page === "home" && theme.palette.primary.main}}/>
                        </IconButton>
                        <IconButton onClick={() => navigate("/friends")}>
                            <HandshakeIcon fontSize="large" sx={{color: page === "friends" && theme.palette.primary.main}}/>
                        </IconButton>
                        <IconButton onClick={() => navigate("/groups")}>
                            <GroupsIcon fontSize="large" sx={{color: page === "groups" && theme.palette.primary.main}}/>
                        </IconButton>
                    </Grid>
                    <Grid item xs={4} sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                        gap: '10px'
                    }}>     
                        <IconButton>
                            <NotificationsIcon fontSize="large"/>
                        </IconButton>
                        <IconButton onClick={handleOpenAccountMenu}>
                            <Avatar>H</Avatar>
                        </IconButton>
                    </Grid>
                </Grid>
            </AppBar>
            <Menu 
                anchorEl={anchorEl}
                open={accountMenuOpen}    
                onClose={handleCloseAccountMenu}   
            >
                <MenuItem onClick={handleCloseAccountMenu}>
                    <Avatar>H</Avatar>
                    <Box sx={{display: 'flex', flexDirection: 'column'}}>
                    <Typography variant="p" sx={{ml: 1, fontWeight: 600}}>Brian Brian</Typography>
                    <Typography variant="subtitle2" sx={{ml: 1, color: theme.palette.grey[500]}}>View Profile</Typography>
                    </Box>
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleCloseAccountMenu}>
                    <SettingsIcon />
                    <Typography variant="p" sx={{ml: 1}}>Settings</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseAccountMenu}>
                    <FeedbackIcon />
                    <Typography variant="p" sx={{ml: 1}}>Send Feedback</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseAccountMenu}>
                    <LogoutIcon />
                    <Typography variant="p" sx={{ml: 1}}>Log Out</Typography>
                </MenuItem>
            </Menu>
        </>
    )
}