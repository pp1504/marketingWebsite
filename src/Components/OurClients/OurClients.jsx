import React from 'react'
import { Box, Stack, Typography, Paper } from '@mui/material'
import Heroku from './heroku.png';
import Airbnb from './airbnb.png';
import Spotify from './spoify.png';
import { styled } from '@mui/material/styles';


const OurClients = () => {

    return (
        <Box mt={10}>
            <Typography sx={{ textAlign:'center', fontWeight: '600' }} variant='h3' component='div'>
                Our Clients
            </Typography>
            <Box mt={10} >

                <Stack
                    direction={{ xs: 'column', md: 'row' }}
                    spacing={{ xs: 3, sm: 4, md: 5 }}
                    alignment='center' justifyContent='center' alignItems="center" 
                >
                    <Box>
                        <img src={Heroku} alt="" />
                    </Box>

                    <Box>
                        <img src={Airbnb} alt="" />
                    </Box>

                    <Box>
                        <img src={Spotify} alt="" />
                    </Box>

                    <Box>
                        <img src={Heroku} alt="" />
                    </Box>

                    <Box>
                        <img src={Airbnb} alt="" />
                    </Box>
                    <Box>
                        <img src={Spotify} alt="" />
                    </Box>


                </Stack>



            </Box>
        </Box>
    )
}

export default OurClients