import { Box, Button, Divider, InputAdornment, TextField, Typography, Link, IconButton } from "@mui/material";
import { useState } from "react";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';

export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            width: '100%'
        }}>
            <Typography variant="h3" sx={{ mb: 4 }}>Sign In</Typography>
            <TextField id="email" label="Email Address" variant="outlined" fullWidth onChange={handleEmailChange} />
            <TextField id="password" label="Password" variant="outlined" fullWidth type={showPassword ? "text" : "password"} InputProps={{
                endAdornment:
                    <InputAdornment position="end">
                        <IconButton onClick={handleClickShowPassword}>
                            {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                        </IconButton>
                    </InputAdornment>
            }} onChange={handlePasswordChange} />
            <Button variant="contained">Login</Button>
            <Divider />
            <Typography variant="p" sx={{ textAlign: 'center' }}>Don't have an account? <Link href="/registration">Sign up</Link></Typography>
        </Box>
    )
}