import { Avatar, List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText} from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import GroupsIcon from '@mui/icons-material/Groups';

export default function SidebarLeft() {
    return (
        <List>
            <ListItem>
                <ListItemButton>
                    <ListItemAvatar>
                        <Avatar>H</Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Hayden Hayden" />
                </ListItemButton>
            </ListItem>
            <ListItem>
                <ListItemButton>
                    <ListItemIcon>
                        <PeopleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Friends" />
                </ListItemButton>
            </ListItem>
            <ListItem>
                <ListItemButton>
                    <ListItemIcon>
                        <GroupsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Groups" />
                </ListItemButton>
            </ListItem>
        </List>
    )
}