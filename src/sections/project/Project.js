import { Box, Stack } from "@mui/joy";
import ProjectMedia from "./components/ProjectMedia";
import ProjectText from "./components/ProjectText";

export default function({project, index}){

    return (
        <Stack justifyContent="space-evenly" alignItems="center" direction={{ xs:"column", sm: (index % 2 ==0 ? "row" : "row-reverse" )}} bgcolor="background.level1" paddingTop="3em" paddingBottom="3em">
            <ProjectMedia media={project.media}/>
            <ProjectText title={project.title} subtitle={project.subtitle} text={project.desc} link={project.link}/>
        </Stack>
    );

}