import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText} from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import GroupsIcon from '@mui/icons-material/Groups';

export default function SidebarLeft() {
    return (

        <List>
            <ListItem sx={{px: 0}}>
                <ListItemButton>
                    <ListItemAvatar>
                        <Avatar>H</Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Hayden Hayden" />
                </ListItemButton>
            </ListItem>
            <ListItem sx={{px: 0}}>
                <ListItemButton>
                    <ListItemIcon>
                        <PeopleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Friends" />
                </ListItemButton>
            </ListItem>
            <ListItem sx={{px: 0}}>
                <ListItemButton>
                    <ListItemIcon>
                        <GroupsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Groups" />
                </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem sx={{px: 0}}>
                <ListItemButton>
                    <ListItemAvatar>
                        <Avatar>A</Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Adam Adam" />
                </ListItemButton>
            </ListItem>
            <ListItem sx={{px: 0}}>
                <ListItemButton>
                    <ListItemAvatar>
                        <Avatar>B</Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Brian Brian" />
                </ListItemButton>
            </ListItem>
            <ListItem sx={{px: 0}}>
                <ListItemButton>
                    <ListItemAvatar>
                        <Avatar>C</Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Caleb Caleb" />
                </ListItemButton>
            </ListItem>
        </List>        

    )
}