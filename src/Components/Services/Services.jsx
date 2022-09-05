import { Box, Stack, Typography, IconButton } from '@mui/material'
import React from 'react'
import "./Services.css";
import Vector1 from './Vector1.png';
import Vector2 from './Vector2.png';
import Vector3 from './Vector3.png';
import Vector4 from './Vector4.png';
import Icon1 from './icon1.png';
import Icon2 from './icon2.png';
import Icon3 from './icon3.png';
import Icon4 from './icon4.png';
import EastIcon from '@mui/icons-material/East';

const Services = () => {

  return (
    <Box mt={10}>
      <Stack direction='column' spacing={3} alignItems={{ sm: 'center', md: 'flex-start' }}

      >
        <Typography color='#919EAB'
          sx={{ fontSize: '12px', fontWeight: '600', textAlign: { xs: 'center', sm: 'right' } }}
        >
          OUR SERVICES
        </Typography>

        <Typography
          color='#212B36'
          sx={{ fontSize: { xs: '32px', sm: '42px ' }, fontWeight: '700', textAlign: { xs: 'center', sm: 'right' } }}
        >
          We Provide
        </Typography>

        <Typography
          color='#637381'
          sx={{ alignSelf: 'stretch', textAlign: { xs: 'center', sm: 'center', md: 'left' }, fontSize: '16px' }}
        >
          Nunc nonummy metus. Donec elit libero, sodales nec, <br />
          volutpat a, suscipit non, turpis
        </Typography>
      </Stack>


      <Box mt={10} sx={{ gap: 2 }}>
        <Stack direction={{ sm: 'column', md: 'row' }} alignItems={{ xs: 'stretch', sm: 'center' }} justifyContent='center' spacing={{ xs: 5, sm: 5 }}>
          <Stack direction={{ xs: 'column', sm: 'row' }} alignItems={{ xs: 'stretch', sm: 'center' }}  justifyContent='center' spacing={5}>
            <Box className={'s-box-1'}
              sx={{padding:'40px 32px'}}>
              <Stack
                direction='column'
                spacing={2}
                alignItems='center'
                justifyContent='center'
              >
                <Box sx={{ position: 'relative' }}>
                  <img src={Vector1} alt="" />
                  <img src={Icon1} alt="" className={'s-icon-1'} />
                </Box>

                <Typography className={'s-head-text'}>
                  SEO
                </Typography>

                <Typography className={'s-content-text'}>
                  Nunc nonummy metus. Donec elit libero
                </Typography>

                <IconButton color="warning" >
                  <EastIcon />
                </IconButton>

              </Stack>
            </Box>

            <Box className={'s-box-2'}
             sx={{padding:{xs:'40px 32px',sm:'40px 32px',md:'80px 32px'}}}
             >
              <Stack
                direction='column'
                spacing={2}
                alignItems='center'
                justifyContent='center'
              >
                <Box sx={{ position: 'relative' }}>
                  <img src={Vector2} alt="" />
                  <img src={Icon2} alt="" className={'s-icon-2'} />
                </Box>

                <Typography className={'s-head-text'}>
                Email Marketing
                </Typography>

                <Typography className={'s-content-text'}>
                  Nunc nonummy metus. Donec elit libero
                </Typography>

                <IconButton color="warning" >
                  <EastIcon />
                </IconButton>


              </Stack>
            </Box>
          </Stack>

          <Stack direction={{ xs: 'column', sm: 'row' }} 
          alignItems={{ xs: 'stretch', sm: 'center' }}
           justifyContent='center' spacing={5}>
            <Box className={'s-box-3'} 
           sx={{padding:{xs:'40px 32px',sm:'40px 32px',md:'80px 32px'}}}
            
            >
              <Stack
                direction='column'
                spacing={2}
                alignItems='center'
                justifyContent='center'
              >
                <Box sx={{ position: 'relative' }}>
                  <img src={Vector3} alt="" />
                  <img src={Icon3} alt="" className={'s-icon-3'} />
                </Box>

                <Typography className={'s-head-text'}>
                Search Engine Oprimization
                </Typography>

                <Typography className={'s-content-text'}>
                  Nunc nonummy metus. Donec elit libero
                </Typography>

                <IconButton color="warning" >
                  <EastIcon />
                </IconButton>


              </Stack>
            </Box>

            <Box className={'s-box-4'}
            sx={{padding:'40px 32px'}}
            >
              <Stack
                direction='column'
                spacing={2}
                alignItems='center'
                justifyContent='center'
              >
                <Box sx={{ position: 'relative' }}>

                  <img src={Vector4} alt="" />
                  <img src={Icon4} alt="" className={'s-icon-4'} />
                </Box>

                <Typography className={'s-head-text'}>
                Social Marketing
                </Typography>

                <Typography className={'s-content-text'}>
                  Nunc nonummy metus. Donec elit libero
                </Typography>

                <IconButton color="warning" >
                  <EastIcon />
                </IconButton>


              </Stack>
            </Box>
          </Stack>
        </Stack>
      </Box>



    </Box>
  )
}

export default Services