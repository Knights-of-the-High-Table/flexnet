import { Grid } from '@mui/material';
import Header from '../components/Header';
import Post from '../components/Post';

export default function Home() {
    return (
        <>
            <Header />
            <Grid container sx={{mt: 2}}>
                <Grid item md={3}>

                </Grid>
                <Grid item md={6}>
                    <Post />                    
                </Grid>
                <Grid item md={3}>

                </Grid>
            </Grid>
        </>
    )
}