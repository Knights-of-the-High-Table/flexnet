import { Box, Button, Divider, InputAdornment, TextField, Typography, Link, IconButton } from "@mui/material";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { useState } from "react";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';

export default function RegistrationForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [height, setHeight] = useState(0);
    const [weight, setWeight] = useState(0);
    const [date, setDate] = useState(dayjs());
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            width: '100%',
        }}>
            <Typography variant="h3" sx={{ mb: 4 }}>Sign Up</Typography>
            <TextField id="name" label="Name" variant="outlined" fullWidth onChange={setName} />
            <TextField id="email" label="Email Address" variant="outlined" fullWidth onChange={setEmail} />
            <TextField id="password" label="Password" variant="outlined" fullWidth type={showPassword ? "text" : "password"} InputProps={{
                endAdornment:
                    <InputAdornment position="end">
                        <IconButton onClick={handleClickShowPassword}>
                            {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                        </IconButton>
                    </InputAdornment>
            }} onChange={setPassword} />
            <Box sx={{
                display: 'flex',
                gap: '20px'
            }}>
                <TextField id="height" label="Height" variant="outlined" fullWidth type="number" InputProps={{ endAdornment: <InputAdornment position="end">cm</InputAdornment> }} onChange={setHeight} />
                <TextField id="weight" label="Weight" variant="outlined" fullWidth type="number" InputProps={{ endAdornment: <InputAdornment position="end">kg</InputAdornment> }} onChange={setWeight} />
            </Box>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker label="Date of Birth" onChange={setDate} />
            </LocalizationProvider>
            <Button variant="contained">Register</Button>
            <Divider />
            <Typography variant="p" sx={{ textAlign: 'center' }}>Already have an account? <Link href="/login">Sign in</Link></Typography>
        </Box>
    )
}