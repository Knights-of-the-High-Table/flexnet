import { Grid } from '@mui/material';
import Header from '../components/Header';
import Post from '../components/Post';
import SidebarLeft from '../components/SidebarLeft';
import NewPost from '../components/NewPost';

export default function Home({theme}) {    
    return (
        <>
            <Header theme={theme} page="home"/>
            <Grid container sx={{mt: 11}}>
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

                </Grid>
            </Grid>
        </>
    )
}