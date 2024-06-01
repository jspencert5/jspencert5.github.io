import { Stack } from '@mui/joy';
import Splash from './sections/splash/Splash';
import Project from './sections/project/Project';
import { useEffect, useState } from 'react';
import MoreInfoScroll from './sections/splash/MoreInfoScroll';
import SectionHeader from './sections/common/components/SectionHeader';
import Education from './sections/education/education';

export default function() {

  const [projects, setProjects] = useState([]);
  const [education, setEducation] = useState([]);

  useEffect(() => {
    fetch('/info.json')
      .then(response => response.json())
      .then(json => {
        console.log(json)
        setProjects(json.projects);
        setEducation(json.education);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <Stack direction="column" justifyContent="flex-start" alignItems="stretch" spacing={0} sx={{backgroundColor: "background.body"}}>
        <Splash />
        <MoreInfoScroll />
        <SectionHeader title="Projects" color="background.level2"/>
        {
          projects.map((project, index) => {
            return <Project key={index} index={index} project={project}/>
          })
        }
        <SectionHeader title="Education" color="background.level2"/>
        <Education education={education}/>
    </Stack>
  );
}
