import { AspectRatio, Box, ButtonGroup, Divider, IconButton, Stack, Typography } from "@mui/joy";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


export default function(){
    return (
        <Box display="flex" height="100vh" width="vw" alignItems="center" justifyContent="center">
            <Stack direction="row" spacing={3} alignItems="center">
                <AspectRatio variant="plain" ratio="3/4" sx={{ width: 250, backgroundColor: "lightgray"}}/>
                <Stack direction="column">
                    <Typography level="h1">James Taintor</Typography>
                    <Typography level="h3">Software Engineer</Typography>
                    <ButtonGroup variant="soft" size="lg" spacing={1} sx={{marginTop: "1em"}}>
                        <IconButton>
                            <GitHubIcon />
                        </IconButton>
                        <IconButton>
                            <LinkedInIcon />
                        </IconButton>
                    </ButtonGroup>
                </Stack>
            </Stack>
        </Box>
    );
}