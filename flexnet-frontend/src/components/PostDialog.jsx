import { Avatar, Card, Dialog, DialogTitle, CardHeader, Typography, CardContent, CardActions, IconButton, Divider, Paper, Box, TextField, InputAdornment, DialogContent} from "@mui/material";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import SendIcon from '@mui/icons-material/Send';

export default function PostDialog({open, handleClose, theme }) {        
    return (
        <Dialog open={open} onClose={handleClose} scroll="paper">
            <DialogTitle sx={{textAlign: 'center'}}>Adam's post</DialogTitle>
            <DialogContent sx={{p: 0}}>
                <Divider />
                <Card elevation={0}>
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
                        gap: '10px',
                        p: 0
                    }}>
                        <Typography variant="p" sx={{p: 2}}>
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
                        <Box component="img" alt="image" src="../Leg-Day-Workout.webp" sx={{width: '100%', boxSizing: 'border-box'}}/>    
                    </CardContent>   
                    <CardActions disableSpacing>                
                        <IconButton>
                            <ThumbUpIcon />
                        </IconButton>
                        <Typography variant="p" sx={{fontWeight: 600, color: theme.palette.grey[700]}}>130</Typography>
                        <IconButton sx={{ml: 1}}>
                            <InsertCommentIcon />
                        </IconButton>
                        <Typography variant="p" sx={{fontWeight: 600, color: theme.palette.grey[700]}}>130</Typography>
                    </CardActions>                       
                </Card>
                <Divider />
                <Box sx={{
                    p: 2
                }}>
                    <Box sx={{
                        display: 'flex',
                        gap: '10px',
                        mb: 2,
                    }}>
                        <Avatar>B</Avatar>
                        <Paper elevation={0} sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            p: 1,
                            bgcolor: theme.palette.background.default
                        }}>
                            <Typography variant="p" sx={{fontWeight: 'bold'}}>Brian Brian</Typography>
                            <Typography variant="p">You are the best influencer in the world! Much love from the Philippines</Typography>
                        </Paper>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        gap: '10px',
                        mb: 2
                    }}>
                        <Avatar>B</Avatar>
                        <Paper elevation={0} sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            p: 1,
                            bgcolor: theme.palette.background.default
                        }}>
                            <Typography variant="p" sx={{fontWeight: 'bold'}}>Brian Brian</Typography>
                            <Typography variant="p">Keep it up!</Typography>
                        </Paper>
                    </Box>     
                    <Box sx={{
                        display: 'flex',
                        gap: '10px',
                        mb: 2
                    }}>
                        <Avatar>B</Avatar>
                        <Paper elevation={0} sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            p: 1,
                            bgcolor: theme.palette.background.default
                        }}>
                            <Typography variant="p" sx={{fontWeight: 'bold'}}>Brian Brian</Typography>
                            <Typography variant="p">Keep it up!</Typography>
                        </Paper>
                    </Box>                    
                </Box>
                <Box sx={{position: 'sticky', bottom: 0, bgcolor: theme.palette.background.paper}}>
                    <Divider />
                    <Box sx={{
                        display: 'flex',
                        gap: '10px',
                        p: 2                    
                    }}>
                        <Avatar>B</Avatar>
                        <TextField id="comment" variant="outlined" placeholder="Write a comment" multiline sx={{ width: '100%'}} InputProps={{
                            endAdornment:
                                <InputAdornment position="end">
                                    <IconButton>
                                        <SendIcon />
                                    </IconButton>
                                </InputAdornment>
                        }}/>                    
                    </Box>
                </Box>
            </DialogContent>            
        </Dialog>
    )
}

