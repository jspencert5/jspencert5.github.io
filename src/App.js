import { Stack } from '@mui/joy';
import Splash from './sections/splash/Splash';

export default function() {
  return (
    <Stack direction="column" justifyContent="flex-start" alignItems="stretch" spacing={0}>
        <Splash />
    </Stack>
  );
}
