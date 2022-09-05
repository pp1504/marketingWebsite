import { Box, Stack, Typography, Button, Divider } from '@mui/material'
import React from 'react'
import AboutImg from './aboutimg.png'
import EastIcon from '@mui/icons-material/East';

const About = () => {

  const Data = [{
    type: 'Projects',
    count: 153,
    content: 'Praesent turpis. Praesent blandit laoreet nibh. Nunc nonummy metus.'

  }, {
    type: 'Happy Clients',
    count: '32K',
    content: 'Praesent turpis. Praesent blandit laoreet nibh. Nunc nonummy metus.'

  }, {
    type: 'Years of experience',
    count: 20,
    content: 'Praesent turpis. Praesent blandit laoreet nibh. Nunc nonummy metus.'

  }]



  return (
    <Box mt={{ xs: 10, md: 15 }}>
      <Box >
        <img src={AboutImg} alt="" width='100%' />
      </Box>

      <Box mt={10}>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 5, sm: 10,lg:20}}  alignItems='center' justifyContent='center'>
          <Box sx={{ width: {xs:'100%',md:'50%',lg:'50%'}}}>
            <Stack direction='column' spacing={6} alignItems={{ sm: 'center', md: 'flex-end' }} 
            
           >
              <Typography color='#919EAB'
                sx={{ fontSize: '12px', fontWeight: '600' ,textAlign:{xs:'center',sm:'right'}}}
              >
                ABOUT US
              </Typography>

              <Typography
                color='#212B36'
                sx={{ fontSize: {xs:'32px',sm:'42px '}, fontWeight: '700',textAlign:{xs:'center',sm:'right'} }}
              >
                Who We Are
              </Typography>

              <Typography
                color=' #637381'                                                                                                       
                sx={{ alignSelf: 'stretch',textAlign:{xs:'center',sm:'right'},fontSize:'14px' }}
              >
                In hac habitasse platea dictumst. Aliquam lobortis.
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. In dui magna, posuere eget, vestibulum et,
                tempor auctor, justo. Pellentesque habitant morbi tristique
                senectus et netus et malesuada fames ac turpis egestas.
              </Typography>

              <Button variant='text' endIcon={<EastIcon />}
                sx={{
                  fontWeight: '600',
                  borderRadius: '10px', marginTop: '3rem', color: '#FA541C',
                  '&:hover': { backgroundColor: '#FEE9D1' }, width:{xs:'100%',sm:'9rem'}
                }}

              >
                Learn more
              </Button>

            </Stack>

          </Box>

          <Box sx={{ width: {xs:'100%',md:'50%',lg:'50%'}}}>
            <Stack direction='column'
              spacing={6}
              alignItems={{ sm: 'center', md: 'flex-start' }}
              justifyContent='center'

            >

              {Data.map((items, index) =>
                <Stack 
                direction='row' 
                key={index}
                 spacing={{xs:3,sm:5}} 
                 alignItems='center' 
                 justifyContent='center' 
                 gap={3}>

                  <Box sx={{width:{xs:'20%',sm:'25%',md:'18%',lg:'14%'}}} >
                     <Stack direction='column' alignItems='flex-start' justifyContent='center'>
                    <Stack direction='row' >
                      <Typography
                        sx={{  fontSize: {xs:'32px',sm:'48px '}, fontWeight: '700' }} color='#212B36'
                      >{items.count}</Typography>
                      <Typography
                        sx={{ fontSize: '24px', fontWeight: '1000' }} color='#FA541C'
                      >+</Typography>
                      
                    </Stack>


                    <Typography
                      sx={{ fontSize: '11px', fontWeight: '600', textTransform: ' uppercase' }} color='#919EAB'
                    >{items.type}</Typography>
                  </Stack>
                  </Box>
                  <Divider orientation="vertical" flexItem  />

                  <Typography
                    sx={{ fontSize: '14px', fontWeight: '400' }} color=' #637381'
                  >
                    {items.content}
                  </Typography>

                </Stack>
              )}

            </Stack>
          </Box>
        </Stack>
      </Box>
    </Box>
  )
}

export default About