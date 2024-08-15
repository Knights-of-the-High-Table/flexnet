import { Box, Button, Divider, InputAdornment, TextField, Typography, Link } from "@mui/material";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { useState } from "react";

export default function RegistrationForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [height, setHeight] = useState(0);
    const [weight, setWeight] = useState(0);
    const [date, setDate] = useState(dayjs());
    return (
        <Box sx={{       
            display: 'flex',
            flexDirection: 'column',
            gap: '20px'
        }}>
            <Typography variant="h3" sx={{mb: 4}}>Sign Up</Typography>
            <TextField id="name" label="Name" variant="outlined" fullWidth onChange={setName}/>
            <TextField id="email" label="Email Address" variant="outlined" fullWidth onChange={setEmail}/>
            <TextField id="password" label="Password" variant="outlined" fullWidth type="password" onChange={setPassword}/>
            <Box sx={{
                display: 'flex',
                gap: '20px'
            }}>
                <TextField id="height" label="Height" variant="outlined" fullWidth type="number" InputProps={{endAdornment: <InputAdornment position="end">cm</InputAdornment>}} onChange={setHeight}/>
                <TextField id="weight" label="Weight" variant="outlined" fullWidth type="number" InputProps={{endAdornment: <InputAdornment position="end">kg</InputAdornment>}} onChange={setWeight}/>
            </Box>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker label="Date of Birth" onChange={setDate}/>
            </LocalizationProvider>
            <Button variant="contained">Register</Button>
            <Divider />
            <Typography variant="p" sx={{textAlign: 'center'}}>Already have an account? <Link href="/login">Sign in</Link></Typography>
        </Box>
    )
}