import { Button, Grid, Typography } from '@mui/material';
import Header from '../components/Header';
import Post from '../components/Post';
import SidebarLeft from '../components/SidebarLeft';
import NewPost from '../components/NewPost';
import BenchPressCalculator from '../components/BenchPressCalculator';

export default function Home({theme}) {    
    return (
        <>
            <Header theme={theme} page="home"/>
            <Grid container sx={{mt: 11, px: 2}} columnSpacing={2}>
                <Grid item md={3}>
                    <SidebarLeft />
                </Grid>
                <Grid item md={6}>
                    <NewPost theme={theme}/>
                    <Post theme={theme}/>                    
                    <Post theme={theme}/>                    
                    <Post theme={theme}/>                    
                    <Post theme={theme}/>                    
                    <Post theme={theme}/>                    
                </Grid>
                <Grid item md={3}>
                    <BenchPressCalculator />
                    <BenchPressCalculator />
                    <Button variant="contained" sx={{width: '100%'}}><Typography variant="h5">+</Typography></Button>
                </Grid>
            </Grid>
        </>
    )
}