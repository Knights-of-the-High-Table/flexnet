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
    const apiUrl = import.meta.env.VITE_APP_API_URL;

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleHeightChange = (e) => {
        setHeight(e.target.value);
    }

    const handleWeightChange = (e) => {
        setWeight(e.target.value);
    }

    const handleDateChange = (e) => {
        setDate(e.target.value);
    }

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleRegister = () => {
        console.log(`${apiUrl}`);
        const json = {
            email: email,
            password: password
        };
        const options = {
            method: 'POST',
            credentials: 'include',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',                          
            },
            body: JSON.stringify(json)
        };
        fetch(`${apiUrl}/register`, options)
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error(error));
    }

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            width: '100%',
        }}>
            <Typography variant="h3" sx={{ mb: 4 }}>Sign Up</Typography>
            <TextField id="name" label="Name" variant="outlined" fullWidth onChange={handleNameChange} />
            <TextField id="email" label="Email Address" variant="outlined" fullWidth onChange={handleEmailChange} />
            <TextField id="password" label="Password" variant="outlined" fullWidth type={showPassword ? "text" : "password"} InputProps={{
                endAdornment:
                    <InputAdornment position="end">
                        <IconButton onClick={handleClickShowPassword}>
                            {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                        </IconButton>
                    </InputAdornment>
            }} onChange={handlePasswordChange} />
            <Box sx={{
                display: 'flex',
                gap: '20px'
            }}>
                <TextField id="height" label="Height" variant="outlined" fullWidth type="number" InputProps={{ endAdornment: <InputAdornment position="end">cm</InputAdornment> }} onChange={handleHeightChange} />
                <TextField id="weight" label="Weight" variant="outlined" fullWidth type="number" InputProps={{ endAdornment: <InputAdornment position="end">kg</InputAdornment> }} onChange={handleWeightChange} />
            </Box>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker label="Date of Birth" onChange={handleDateChange} />
            </LocalizationProvider>
            <Button variant="contained" onClick={handleRegister}>Register</Button>
            <Divider />
            <Typography variant="p" sx={{ textAlign: 'center' }}>Already have an account? <Link href="/login">Sign in</Link></Typography>
        </Box>
    )
}