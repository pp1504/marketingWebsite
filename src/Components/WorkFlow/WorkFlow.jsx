import { Box,Stack,Typography } from '@mui/material'
import React from 'react';
import "./WorkFlow.css";
import PlanningIcon from './planning.png';
import ResearchIcon from './research.png';
import OptimizationIcon from './optimization.png';
import ResultIcon from './result.png';
import EastIcon from "@mui/icons-material/East";

const WorkFlow = () => {
  return (
   <Box mt={10}>
    <Stack direction='column' spacing={3} alignItems={{ sm: 'center', md: 'flex-start' }}

>
  <Typography color='#919EAB'
    sx={{ fontSize: '12px', fontWeight: '600', textAlign: { xs: 'center', sm: 'right' } }}
  >
 WORK FLOW
  </Typography>

  <Typography
    color='#212B36'
    sx={{ fontSize: { xs: '32px', sm: '42px ' }, fontWeight: '700', textAlign: { xs: 'center', sm: 'right' } }}
  >
 Working Process
  </Typography>

  <Typography
    color='#637381'
    sx={{ alignSelf: 'stretch', textAlign: { xs: 'center', sm: 'center', md: 'left' }, fontSize: '16px' }}
  >
    Nunc nonummy metus. Donec elit libero, sodales nec, <br />
    volutpat a, suscipit non, turpis
  </Typography>
</Stack>

<Box >
    <Box >
        <Stack direction={{xs:'column',md:'row'}} 
        spacing={{xs:0,sm:6}}
        
        justifyContent='center'
        >

           <Stack direction={{xs:'column',sm:'row'}}
            spacing={6} mt={10}
            justifyContent='center'
            >
            <Box className={'wf-card-1'} mt={5} 
            sx={{height:'7rem',width:{xs:'100%',sm:'50%',md:'9rem',lg:'15rem'}}}>
          
                <Box >
                  <Box>
                   <img src={PlanningIcon} alt="" style={{transform:'scale(0.7)'}}/>
                   </Box>
                   <Box mt={2} sx={{display:'flex',gap:1,justifyContent:'right'}}>
                   <Typography color='#770508'
                   sx={{fontSize:'17px',fontWeight:'600'}}
                   >Planning </Typography>
                   <Box color='#770508'><EastIcon /></Box>
                   </Box>
                </Box>
                
            </Box>
            <Box className={'wf-card-2'} mt={0} 
             sx={{height:'7rem',width:{xs:'100%',sm:'50%',md:'9rem',lg:'15rem'}}}>
            <Box >
                  <Box>
                   <img src={ResearchIcon} alt="" style={{transform:'scale(0.7)'}}/>
                   </Box>
                   <Box mt={2} sx={{display:'flex',gap:1,justifyContent:'right'}}>
                   <Typography color='#063963'
                   sx={{fontSize:'17px',fontWeight:'600'}}
                   >
                    Research
                     </Typography>
                   <Box color='#063963'><EastIcon /></Box>
                   </Box>
                </Box>
            </Box>

            </Stack>
            
            <Stack direction={{xs:'column',sm:'row'}} spacing={6} alignItems='stretch'>
            <Box className={'wf-card-3'} mt={5}
            sx={{height:'7rem',width:{xs:'100%',sm:'50%',md:'9rem',lg:'15rem'}}}>
          
            <Box >
                  <Box>
                   <img src={OptimizationIcon} alt="" style={{transform:'scale(0.7)'}}/>
                   </Box>
                   <Box mt={2} sx={{display:'flex',gap:1,justifyContent:'right'}}>
                   <Typography color='#7A5204'
                   sx={{fontSize:'17px',fontWeight:'600'}}
                   >
                   Optimization
                   </Typography>
                   <Box color='#7A5204'><EastIcon /></Box>
                   </Box>
                </Box>
                
            </Box>
            <Box className={'wf-card-4'} mt={0} 
             sx={{height:'7rem',width:{xs:'100%',sm:'50%',md:'9rem',lg:'15rem'}}}>
            <Box >
                  <Box>
                   <img src={ResultIcon} alt="" style={{transform:'scale(0.7)'}}/>
                   </Box>
                   <Box mt={2} sx={{display:'flex',gap:1,justifyContent:'right'}}>
                   <Typography color='#02665B'
                   sx={{fontSize:'17px',fontWeight:'600'}}
                   >
                    Result
                     </Typography>
                   <Box color='#02665B'><EastIcon /></Box>
                   </Box>
                </Box>
            </Box>

            </Stack>
           
        </Stack>

        
    </Box>
    
</Box>

   </Box>
  )
}

export default WorkFlow