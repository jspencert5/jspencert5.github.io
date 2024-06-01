import { Stack } from '@mui/joy';
import Splash from './sections/splash/Splash';
import Project from './sections/project/Project';
import { useEffect, useState } from 'react';
import MoreInfoScroll from './sections/splash/MoreInfoScroll';

export default function() {

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('/projects.json')
      .then(response => response.json())
      .then(json => {
        console.log(json)
        setProjects(json.projects);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <Stack direction="column" justifyContent="flex-start" alignItems="stretch" spacing={0} sx={{backgroundColor: "background.body"}}>
        <Splash />
        <MoreInfoScroll />
        {
          projects.map((project, index) => {
            return <Project key={index} index={index} project={project}/>
          })
        }
    </Stack>
  );
}
