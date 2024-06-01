import { AspectRatio } from "@mui/joy";

export default function({media}){
    return (
        <AspectRatio variant="plain" objectFit="contain"  minHeight={120} maxHeight={200} sx={{ width: {xs: "80vw", sm: "30vw"}, borderRadius: "0.5em", bgcolor: 'background.body' }}>
        <img
            src={media.path}
            alt={media.alt}
        />
        </AspectRatio>
    );
}