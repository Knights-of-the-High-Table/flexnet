import Grid from '@mui/material/Grid';
import RegistrationForm from '../components/RegistrationForm';
import { Box, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { useTheme } from '@mui/material/styles';

export default function Registration() {
    const theme = useTheme();
    return (
        <Grid container sx={{
            height: '100vh'
        }}>
            <Grid item xs={0} md={7} sx={{
                py: 10,
                px: 18,
                display: { xs: 'none', md: 'flex'},
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                background: 'linear-gradient(#5391f5, #DCEEFA)',
            }}>
                <Typography variant='h2' sx={{color: 'white'}}>Join Us!</Typography>
                <Typography variant='h5' sx={{color: 'white', textAlign: 'center'}}>Join the best fitness community in the world!</Typography>
                <Box sx={{
                    height: 400,
                    width: 400,                                                    
                }} component="img" src="../registration.svg"/>
            </Grid>
            <Grid item xs={12} md={5} sx={{
                px: 6, 
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',    
            }}>
                <RegistrationForm />
            </Grid>
        </Grid>
    )
}