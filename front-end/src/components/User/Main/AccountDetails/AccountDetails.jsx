import { Box, Divider, ListItem, Typography } from '@mui/material';

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

export default function Setting() {
    return (
        <Box boxShadow={2} p="1rem">
            <Box pb="0.25rem">
                <Typography variant="h5" color="var(--primary)">
                    Account Details
                </Typography>
            </Box>
            <Divider />
            <Item name="Owner Name" value="Muhammad Minhaj" divider />
            <Item name="Customer Number" value="123456789" divider />
            <Item name="Account Since" value="02-02-2021" divider />
            <Item name="Account Type" value="Savings" divider />
            <Item name="Card No" value="987654321" />
        </Box>
    );
}
