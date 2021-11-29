import { Box, ListItem, Typography } from '@mui/material';

const Item = ({ name, value, divider }) => (
    <ListItem divider={divider}>
        <Box width="100%" display="flex" justifyContent="space-between">
            <Typography variant="subtitle1" color="text.secondary">
                {name}
            </Typography>
            <Typography>{value}</Typography>
        </Box>
    </ListItem>
);
export default Item;
