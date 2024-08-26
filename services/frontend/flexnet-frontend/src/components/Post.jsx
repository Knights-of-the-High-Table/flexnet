import { Avatar, Card, CardActions, CardContent, CardHeader, IconButton, Typography } from "@mui/material";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import PostDialog from "./PostDialog";
import { useState } from "react";

export default function Post() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }
    return (     
        <>
            <Card>
                <CardHeader 
                    avatar={
                        <Avatar>A</Avatar>
                    }
                    title="Adam Adam"
                    subheader="Aug 21, 2024"
                />
                <CardContent sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px'
                }}>
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
                    <Typography variant="p">1500 likes, 230 comments</Typography>                
                </CardContent>   
                <CardActions>                
                    <IconButton>
                        <ThumbUpIcon />
                    </IconButton>
                    <IconButton onClick={handleOpen}>
                        <InsertCommentIcon />
                    </IconButton>
                </CardActions>                        
            </Card>

            <PostDialog open={open} handleClose={handleClose}/>
        </>   
    )
}