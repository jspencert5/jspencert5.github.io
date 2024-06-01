import { Box, Stepper } from "@mui/joy";
import EducationStep from "./educationStep";

export default function({education}){
    return (
        <Box display="flex" width="100vw" alignItems="center" justifyContent="center">
            <Stepper orientation="horizontal" size="lg" sx={{ overflowX: "scroll", width: {xs: "95vw",sm: "50vw"}, paddingY: "5em" }}>
                {
                    education.map((insitution, index) => {
                        return (
                            <EducationStep insitution={insitution} key={index} last={index == education.length -1}/>
                        );
                    })
                }
            </Stepper>
        </Box>
        
    );
}