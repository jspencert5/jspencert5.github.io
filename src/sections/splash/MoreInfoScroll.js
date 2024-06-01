import { KeyboardDoubleArrowDown } from "@mui/icons-material";
import { Box, Button } from "@mui/joy";
import { useState } from "react";

export default function(){

    const [visible, setVisible] = useState(true)
 
    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 0) {
            setVisible(false)
        }
        else if (scrolled <= 0) {
            setVisible(true)
        }
    };
 
    const scrollDown = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    };
 
    window.addEventListener('scroll', toggleVisible);

    return (
        <Box display="flex" height="5vh" width="vw" alignItems="center" justifyContent="center">
            {
                visible &&
                <Button variant="plain" color="neutral" size="sm" endDecorator={<KeyboardDoubleArrowDown/>} onClick={scrollDown}>Scroll for More</Button>
            }
        </Box>
    );
}