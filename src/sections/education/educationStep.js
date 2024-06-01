import { School } from "@mui/icons-material";
import { Step, StepIndicator, Typography } from "@mui/joy";

export default function({insitution, last}){
    return (
        <Step orientation="vertical" sx={{
            '&::after': {
                display: last ? "none": ""
            },
          }} indicator={
            <StepIndicator variant="solid" color="neutral">{<School/>}</StepIndicator>
        }>
            <Typography level="title-lg">{insitution.graduationYear}</Typography>
            <Typography level="title-lg">{insitution.awarded}</Typography>
            <Typography level="body-sm">{insitution.desc}</Typography>
            <Typography level="title-md">{insitution.name}</Typography>
            <Typography level="title-sm">{insitution.location}</Typography>
        </Step>
    );
}