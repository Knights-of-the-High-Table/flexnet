import { AppBar, Avatar, Box, Grid, IconButton, InputAdornment, Paper, TextField, Typography } from "@mui/material";
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import HomeIcon from '@mui/icons-material/Home';
import HandshakeIcon from '@mui/icons-material/Handshake';
import GroupsIcon from '@mui/icons-material/Groups';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';

export default function Header() {
    return (
        <Paper elevation={3} sx={{py: 1, px: 2}}>
            <Grid container>
                <Grid item xs={4} sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    gap: '10px'
                }}>     
                    <Typography variant="h4">LOGO</Typography>
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
                    <IconButton>
                        <HomeIcon fontSize="large"/>
                    </IconButton>
                    <IconButton>
                        <HandshakeIcon fontSize="large"/>
                    </IconButton>
                    <IconButton>
                        <GroupsIcon fontSize="large"/>
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
                    <Avatar>H</Avatar>
                </Grid>
            </Grid>
        </Paper>
    )
}