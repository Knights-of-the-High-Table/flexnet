import { Avatar, Card, Dialog, DialogTitle, CardHeader, Typography, CardContent, CardActions, IconButton, Divider, Paper, Box, TextField, InputAdornment, DialogContent, Popover, FormGroup} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import EmojiPicker from "emoji-picker-react";
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import { useState } from "react";

export default function NewPost({theme}) {
    const [post, setPost] = useState('');    
    const [emojiPickerOpen, setEmojiPickerOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const handlePostChange = (e) => {
        setPost(e.target.value);
    }

    const onEmojiClick = (emojiObject) => {
        setPost(post + emojiObject.emoji);
        setAnchorEl(null);
        setEmojiPickerOpen(false);
    };

    const handleOpenEmojiPicker = (event) => {
        setAnchorEl(event.currentTarget)
        setEmojiPickerOpen(true);
    } 

    const handleCloseEmojiPicker = () => {
        setAnchorEl(null);
        setEmojiPickerOpen(false);
    } 

    return (
        <>
            <Card sx={{mb: 2}}>     
                <CardHeader 
                    avatar={
                        <Avatar>H</Avatar>
                    }
                    titleTypographyProps={{fontWeight: 600, fontSize: '15px', color: theme.palette.text.secondary}}
                    title="Hayden Hayden"
                    
                />           
                <CardContent sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px'
                }}>
                    <TextField id="newpost" variant="outlined" placeholder="Write something..." multiline rows="5" value={post} onChange={handlePostChange} sx={{ width: '100%', position: 'relative'}} InputProps={{
                            sx: { pb: 6},
                            startAdornment:
                                <InputAdornment position="start" sx={{ position: 'absolute', bottom: 25, left: 10 }}>
                                    <IconButton onClick={handleOpenEmojiPicker}>
                                        <InsertEmoticonIcon />
                                    </IconButton>
                                </InputAdornment>,
                            endAdornment:
                                <InputAdornment position="end" sx={{ position: 'absolute', bottom: 25, right: 10 }}>
                                    <IconButton>
                                        <SendIcon />
                                    </IconButton>
                                </InputAdornment>      
                        }}/>                                                        
                </CardContent>                      
            </Card>

            <Popover
                elevation={0}
                anchorEl={anchorEl}
                open={emojiPickerOpen}
                onClose={handleCloseEmojiPicker}                
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}                
            >
                <EmojiPicker onEmojiClick={onEmojiClick}/>
            </Popover>
        </>   
    )
}