import { AppBar, Box, TextField } from "@mui/material";
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';

export default function Header() {
    return (
        <AppBar>
            <Box>
                <FitnessCenterIcon sx={{height: '100%'}}/>
                <TextField />
            </Box>
        </AppBar>
    )
}