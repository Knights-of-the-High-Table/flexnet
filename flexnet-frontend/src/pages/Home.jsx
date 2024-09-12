import { Box, Button, Grid, Typography } from '@mui/material';
import Header from '../components/Header';
import Post from '../components/Post';
import SidebarLeft from '../components/SidebarLeft';
import NewPost from '../components/NewPost';
import BenchPressCalculator from '../components/BenchPressCalculator';

export default function Home({theme}) {        
    return (
        <>
            <Header theme={theme} page="home"/>
            <Grid container sx={{pt: '90px', px: 2}} columnSpacing={2}>
                <Grid item md={3} sx={{position: 'sticky', top: '90px', bottom: '16px', maxHeight: 'calc(100vh - 90px)', overflow: 'auto', boxSizing: 'border-box', pb: 2}}>
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
                <Grid item md={3} sx={{position: 'sticky', top: '90px', bottom: '16px', maxHeight: 'calc(100vh - 90px)', overflow: 'auto', boxSizing: 'border-box', pb: 2}}>                  
                    <BenchPressCalculator />
                    <BenchPressCalculator />
                    <BenchPressCalculator />
                    <Button variant="contained" sx={{width: '100%'}}><Typography variant="h5">+</Typography></Button>                               
                </Grid>
            </Grid>
        </>
    )
}