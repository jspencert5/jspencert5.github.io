import { ArrowOutward } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/joy";

export default function({title, subtitle, text, link}){
    return (
        <Stack sx={{maxWidth: {xs: "80vw", sm: "50vw"}}} paddingTop={{xs: "1em"}}>
            <Typography level="title-lg">{title}</Typography>
            <Typography level="title-md">{subtitle}</Typography>
            <Typography level="body-sm">{text}</Typography>
            {
                link != "" && 
                <Box display="flex" flexDirection="row" paddingTop="1em" justifyContent={{xs: "center", sm: "flex-start"}} alignItems="center">
                <Button variant="soft" component="a" href={link} endDecorator={<ArrowOutward />}>See More</Button>
            </Box>
            }
            
        </Stack>
    );
}