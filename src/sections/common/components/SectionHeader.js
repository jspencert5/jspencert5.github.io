import { Box, Typography } from "@mui/joy";

export default function({title, color}){
    return (
        <Box display="flex" height="5vh" width="vw" alignItems="center" justifyContent="center" padding="1em" bgcolor={color}>
            <Typography level="h1">{title}</Typography>
        </Box>
    );
}