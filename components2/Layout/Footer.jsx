import React from 'react'
import { Box, Typography } from "@mui/material"
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
const Footer = () => {
    return (
        <>



            <Box sx={{ textAlign: 'center', bgcolor: '#1A1A19', color: 'white', padding: 3 }}>

                <Box sx={{
                    my: 3, "& svg": {
                        fontSize: "60px",
                        mr: 2,

                    },
                    "& svg:hover": {
                        color: "goldencolor",
                    }
                }} >
                    <Typography
                        variant="h5"
                        sx={{
                            "@media (max-width:600px)": {
                                fontSize: "1rem",
                            }
                        }}
                    >
                        <InstagramIcon />
                        <XIcon />

                    </Typography>

                </Box>


                <Typography variant="h5" sx={{
                    "@media (min-width : 600px)": { fontSize: "1rem", }

                }} >
                    All Rights Reserved &copy;
                    Techinfo YT
                </Typography>
            </Box>

        </>
    )
}

export default Footer
