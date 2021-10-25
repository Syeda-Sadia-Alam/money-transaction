import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import links from './links';

const NestedList = ({ name, icon, list }) => {
    const [open, setOpen] = useState(false);
    const history = useHistory();
    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <>
            <ListItemButton onClick={handleClick} divider>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={name} />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {list.map((item) => (
                        <ListItemButton
                            sx={{ pl: 4 }}
                            key={item.name}
                            onClick={() => history.push(item.path)}
                        >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.name} />
                        </ListItemButton>
                    ))}
                </List>
            </Collapse>
        </>
    );
};

export default function Sidebar() {
    const history = useHistory();
    return (
        <List>
            {links.map(({ name, icon, path, isNotList, list }) =>
                isNotList ? (
                    <ListItemButton key={name} divider onClick={() => history.push(path)}>
                        <ListItemIcon>{icon}</ListItemIcon>
                        <ListItemText primary={name} />
                    </ListItemButton>
                ) : (
                    <NestedList name={name} icon={icon} key={name} list={list} />
                )
            )}
        </List>
    );
}
