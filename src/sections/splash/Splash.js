import { AspectRatio, Box, ButtonGroup, Divider, IconButton, Stack, Typography } from "@mui/joy";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


export default function(){
    return (
        <Box display="flex" height="100vh" width="vw" alignItems="center" justifyContent="center">
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={4} alignItems="center">
                <AspectRatio variant="scaleDown" objectFit="cover" ratio="3/4" sx={{ width: 250, backgroundColor: "lightgray", borderRadius: "1em", boxShadow: 1}}>
                    <img src="/Profile.JPG" alt="James Taintor Profile Photo" style={{"object-position" : "top 0 left -105px"}}/>
                </AspectRatio>
                <Stack direction="column" alignItems={{xs: "center", sm: "flex-start"}}>
                    <Typography level="h1">James Taintor</Typography>
                    <Typography level="h3">Software Engineer</Typography>
                    <ButtonGroup variant="soft" size="lg" spacing={1} sx={{marginTop: "1em"}}>
                        <IconButton component="a" target="_blank" rel="noopener noreferrer" href="https://github.com/jspencert5">
                            <GitHubIcon />
                        </IconButton>
                        <IconButton component="a" target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/spencertaintor">
                            <LinkedInIcon />
                        </IconButton>
                    </ButtonGroup>
                </Stack>
            </Stack>
        </Box>
    );
}