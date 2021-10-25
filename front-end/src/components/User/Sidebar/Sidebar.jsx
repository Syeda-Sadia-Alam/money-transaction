import {
    Box,
    Divider,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    // eslint-disable-next-line prettier/prettier
    Paper
} from '@mui/material';
import { useHistory } from 'react-router-dom';
import links from '../links';
import User from './User';

export default function Sidebar() {
    const history = useHistory();
    return (
        <Paper>
            <User />
            <List sx={{ width: '100%' }} component="nav" aria-labelledby="nested-list-subheader">
                <Divider />
                {links.map(({ name, icon, path }, ind) => (
                    <ListItemButton
                        divider={links.length !== ind + 1}
                        key={name}
                        onClick={() => history.push(path)}
                    >
                        <ListItemIcon>
                            <Box fontSize="1.5rem">{icon}</Box>
                        </ListItemIcon>
                        <ListItemText primary={name} />
                    </ListItemButton>
                ))}
            </List>
        </Paper>
    );
}
