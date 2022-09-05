import { Box ,Stack,Typography} from '@mui/material'
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import Profile1 from './profile1.png';
import Profile2 from './profile2.png';

const Team = () => {
  return (
    <Box mt={10} >
        <Box sx={{width:'100%',background:'#161C24' ,
    opacity: '0.88',position:'absolute',left:"0%",color:'white'}}>
            <Box sx={{padding:
            {xs:'1rem 2rem',
             sm:'1rem 2rem',
             md:'1rem 3rem',
             lg:'1rem 5rem',
             xl:'1rem 5rem'},
            }} mt={10}>
                <Stack direction='column' spacing={4} alignItems={{ sm: 'center', md: 'flex-start' }} 
            
            >
               <Typography color='#919EAB'
                 sx={{ fontSize: '12px', fontWeight: '600' ,textAlign:{xs:'center',sm:'right'}}}
               >
                 TEAM
               </Typography>
 
               <Typography
                 color='#FA541C'
                 sx={{ fontSize: {xs:'32px',sm:'42px '}, fontWeight: '700',textAlign:{xs:'center',sm:'right'} }}
               >
                Meet Our Team
               </Typography>
 
               <Typography
                 color=' #ffffff'                                                                                                       
                 sx={{ alignSelf: 'stretch',textAlign:{xs:'center',sm:'left'},fontSize:'14px' }}
               >
                Since wire-frame renderings are relatively <br />
                simple and fast to calculate, they are often <br />
                used in cases
               </Typography>
 
               
 
             </Stack>
            </Box>

            <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
      
      
            <SwiperSlide >
           
                <img src={Profile1} alt="" />
                
             
            </SwiperSlide>

            
            <SwiperSlide >
           
                <img src={Profile2} alt="" />
                
             
            </SwiperSlide>
         
      </Swiper>
        </Box>
    </Box>
  )
}

export default Team