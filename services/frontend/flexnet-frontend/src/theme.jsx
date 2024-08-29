import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#5391f5',
            light: '#DCEEFA'
        },
        background: {
            default: '#e6e6e6',            
        },
    }
})

export default theme;