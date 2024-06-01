import { School } from "@mui/icons-material";
import { Step, StepIndicator, Typography, Stack } from "@mui/joy";

export default function({insitution, last}){
    return (
        <Step  orientation="vertical" sx={{
            '&::after': {
                display: last ? "none": ""
            },
            paddingX: "1em"
          }} indicator={
            <StepIndicator variant="solid" color="neutral">{<School/>}</StepIndicator>
        }>
            <Typography level="title-lg" textAlign="center">{insitution.graduationYear}</Typography>
            <Typography level="title-lg" textAlign="center">{insitution.awarded}</Typography>
            <Typography level="body-sm" textAlign="center">{insitution.desc}</Typography>
            <Typography level="title-md" textAlign="center">{insitution.name}</Typography>
            <Typography level="title-sm" textAlign="center">{insitution.location}</Typography>  
        </Step>
    );
}