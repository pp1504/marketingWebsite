import React from 'react'
import "./Intro.css"
import { Box,Stack ,Typography,Button} from '@mui/material'
import IntoImage from "./introimage.png"
const Intro = () => {
  return (
    <Box sx={{display:'flex'}}>
        <Box sx={{flexGrow:2}} mt={9} >
           <Stack 
           direction='column' 
           spacing={7}
           justifyContent='center'             >
                
                <Typography
                 variant="h3"
                  sx={{fontSize:{xs:'40px',sm:'64px'},textAlign:{xs:'center',md:'left'},
                fontWeight:'700'
                }} component='div'
                 >Boosts Your <br />  Website Traffic </Typography>

            
                  


            <Typography className={'i-text-light'}  sx={{fontSize:{xs:'16px',sm:'16px'},textAlign:{xs:'center',md:'left'},}}>Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus<br />
                 ipsum laoreet sapien, quis venenatis ante odio sit
                 <br /> amet eros. </Typography>

            <Button variant='contained'
                  sx={{backgroundColor:'#FA541C',
                fontWeight:'600',
                borderRadius:'10px',marginTop:'3rem',
                '&:hover':{backgroundColor:'#B3200E'},
                }}
                  className='i-button'
                  >
                    Try Now
                    </Button>

           </Stack>
        </Box>

        <Box ml={9} sx={{display:{xs:'none',md:'flex'},transform:{md:'scale(0.7)',lg:'scale(0.9)'}}} >
            <img src={IntoImage} alt="" />
        </Box>


    </Box>
  )
}

export default Intro