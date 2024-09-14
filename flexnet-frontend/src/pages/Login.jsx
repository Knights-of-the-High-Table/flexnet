import Grid from '@mui/material/Grid';
import LoginForm from '../components/LoginForm';
import { Box, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { useTheme } from '@mui/material/styles';

export default function Login() {
    const theme = useTheme();
    return (
        <Grid container sx={{
            height: '100vh'
        }}>
            <Grid item xs={12} md={5} sx={{
                px: 16, 
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',    
            }}>
                <LoginForm />
            </Grid>
            <Grid item xs={0} md={7} sx={{
                px: 18,
                display: { xs: 'none', md: 'flex'},
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '10px',
                background: 'linear-gradient(#5391f5, #DCEEFA)',
            }}>
                <Typography variant='h2' sx={{color: 'white'}}>Welcome!</Typography>
                <Typography variant='h5' sx={{color: 'white', textAlign: 'center'}}>Log in to connect with your fitness community and stay on track with your goals!</Typography>
                <Box sx={{
                    width: 400, 
                    mt: 4,                                                 
                }} component="img" src="../login.svg"/>
            </Grid>
        </Grid>
    )
}
