import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Menu, MenuItem, Skeleton, Typography } from "@mui/material";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PostDialog from "./PostDialog";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import { useState } from "react";

export default function Post({theme}) {   
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }

    const [settingsOpen, setSettingsOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleOpenSettings = (event) => {
        setAnchorEl(event.currentTarget);
        setSettingsOpen(true);
    }
    const handleCloseSettings = () => {
        setAnchorEl(null);
        setSettingsOpen(false);
    }

    return (     
        <>
            <Card sx={{mb: 2}}>
                <CardHeader 
                    avatar={
                        loading ? <Skeleton animation="wave" variant="circular" width={40} height={40} /> : <Avatar>A</Avatar>
                    }
                    titleTypographyProps={{fontWeight: 600, fontSize: '15px', color: theme.palette.text.secondary}}
                    title={
                        loading ? (<Skeleton
                            animation="wave"
                            height={10}
                            width="30%"
                            style={{ marginBottom: 6 }}
                          />
                        ) : (
                          'Adam Adam'
                        )
                    }                
                    subheader={
                        loading ? (
                            <Skeleton animation="wave" height={10} width="20%" />
                        ) : (
                            "Aug 21, 2024"
                        )
                    }
                    action={
                        loading ? null : (
                            <IconButton onClick={handleOpenSettings}>
                                <MoreVertIcon />
                            </IconButton>
                        )
                    }                    
                />
                <CardContent>   
                    { loading ? (
                        <>
                        <Skeleton animation="wave" height={15} width="60%" sx={{marginBottom: 1}}/>
                        <Skeleton animation="wave" height={15} width="70%" sx={{marginBottom: 1}}/>                        
                        <Skeleton animation="wave" height={15} width="40%" sx={{marginBottom: 1}}/>
                        </>
                    ) : (
                        <Typography variant="p">
                            🔥 Leg Day Essentials 🔥

                            Hey, #FitFam! 💪 If you’re looking to build strong, sculpted legs, consistency is key. Today was all about pushing past limits and making every rep count. Here’s a glimpse of my leg day routine:

                            1️⃣ Warm-up: 10 min on the Stairmaster to get the blood flowing.
                            2️⃣ Squats: 4 sets of 10 reps – Go deep to engage those glutes!
                            3️⃣ Leg Press: 4 sets of 12 reps – Control on the way down is 🔑.
                            4️⃣ Lunges: 3 sets of 15 reps (each leg) – Feel the burn!
                            5️⃣ Hamstring Curls: 4 sets of 12 reps – Keep your core tight.
                            6️⃣ Calf Raises: 5 sets of 20 reps – Don’t neglect those calves.

                            Remember, it’s not just about lifting heavy; it’s about form, control, and connecting with the muscles you’re working. 💥

                            Post-workout, I refueled with a protein smoothie packed with spinach, banana, almond butter, and a scoop of my favorite vanilla whey protein. 🍌🥬

                            Let’s keep crushing those goals together! 💥 Drop a 💯 if leg day is your favorite, or tell me your go-to leg exercises below! 👇

                            #LegDay #FitnessJourney #StrongLegs #GymLife #NoDaysOff #FitnessMotivation
                        </Typography>   
                    )}     
                </CardContent>   
                {loading ? null : (
                    <CardMedia
                    component="img"
                    image="../Leg-Day-Workout.webp"
                    alt="image"
                />)}
                
                {loading ? null : (
                    <CardActions disableSpacing>                
                        <IconButton>
                            <ThumbUpIcon />
                        </IconButton>
                        <Typography variant="p" sx={{fontWeight: 600, color: theme.palette.action.active}}>130</Typography>
                        <IconButton sx={{ml: 1}} onClick={handleOpen}>
                            <InsertCommentIcon />
                        </IconButton>
                        <Typography variant="p" sx={{fontWeight: 600, color: theme.palette.action.active}}>130</Typography>
                    </CardActions> 
                )}
                                        
            </Card>

            <Menu                
                anchorEl={anchorEl}
                open={settingsOpen}
                onClose={handleCloseSettings}                      
            >                
                <MenuItem onClick={handleCloseSettings}>
                    <AccountBoxIcon />
                    <Typography variant="p" sx={{ml: 1.5}}>View Adam Adam's profile</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseSettings}>
                    <CancelPresentationIcon />
                    <Typography variant="p" sx={{ml: 1.5}}>Hide post</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseSettings}>
                    <ReportProblemIcon />
                    <Typography variant="p" sx={{ml: 1.5}}>Report post</Typography>
                </MenuItem>
            </Menu>

            <PostDialog open={open} handleClose={handleClose} theme={theme}/>
        </>   
    )
}