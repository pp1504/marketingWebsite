import { Box, Stack, Typography, Button } from '@mui/material'
import React from 'react'
import "./CaseStudy.css"
import CubeImg from './cubeimg.png';
import ChairImg from './chairimg.png';
import TriangleImg from './triangleimg.png';
import BallingImg from './ballimg.png';
import EastIcon from '@mui/icons-material/East';

const CaseStudy = () => {
    return (
        <Box mt={10}>
            <Stack direction='column' spacing={3} alignItems={{ sm: 'center', md: 'flex-start' }}

            >
                <Typography color='#919EAB'
                    sx={{ fontSize: '12px', fontWeight: '600', textAlign: { xs: 'center', sm: 'right' } }}
                >
                    OUR WORK
                </Typography>

                <Typography
                    color='#212B36'
                    sx={{
                        fontSize: { xs: '32px', sm: '42px ' },
                        fontWeight: '700', textAlign: { xs: 'center', sm: 'right' }
                    }}
                >
                    Case Studies
                </Typography>
            </Stack>


            <Box mt={{ xs: 0, sm: 5, md: 10 }}>
                <Stack direction={{ xs: 'column', sm: 'row' }}
                    justifyContent='center'

                >

                    <Stack direction={{ xs: 'column', sm: 'row', md: 'row' }}
                        spacing={4}
                        alignment='center' justifyContent='center'>

                        <Box mt={{ xs: 5, sm: 10, md: 40 }}
                            sx={{
                                opacity: { xs: '0.5', md: '1' },
                                borderRadius: '15px',
                                position: 'relative', width: { xs: '100%', sm:'50%',md: '20%' }
                            }}>

                            <img src={TriangleImg} alt=""
                                style={{ borderRadius: '15px' }} width='100%' />
                            <Box sx={{ display: { xs: 'none', md: 'flex' }, }}>
                                <div className='overlay' style={{ top: '13.5%', height: '26%' }}>
                                    <Stack direction='column' spacing={2}>
                                        <Typography color='#ffffff'
                                            sx={{ fontSize: '12px', fontWeight: '600', textAlign: 'center', opacity: 0.48 }}
                                        >
                                            DIGITAL
                                        </Typography>

                                        <Typography
                                            color='#ffffff'
                                            sx={{
                                                fontSize: { xs: '16px', sm: '16px ' },
                                                fontWeight: '700', textAlign: 'center'
                                            }}
                                        >
                                            Turn Key Smart
                                        </Typography>
                                    </Stack>
                                </div>
                            </Box>
                        </Box>

                        <Box sx={{ width: { xs: '100%', md: '100%' }, display: { xs: 'none', md: 'flex' } }}>
                            <Stack direction='column' spacing={4}>
                                <Box>
                                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={6}>
                                        <Box>
                                            <Box sx={{ width: '100%' }} >
                                                <Stack justifyContent='center' alignItems='stretch'>
                                                    <Box sx={{
                                                        display: 'flex', padding: { xs: '0', md: '10px' },
                                                        width: '100%'
                                                    }}
                                                        className='cs-box-1'>

                                                        <Box sx={{ opacity: { xs: '0.7', md: '1' } }}>
                                                            <img src={CubeImg} alt=""
                                                                style={{ borderRadius: '15px' }} width='100%' /></Box>

                                                        <Box sx={{ padding: '20px', display: { xs: 'none', md: 'flex' } }}>
                                                            <Box>
                                                                <Stack direction='column'
                                                                    spacing={3}
                                                                    alignItems={{ sm: 'center', md: 'flex-start' }}

                                                                >
                                                                    <Typography color='red'
                                                                        sx={{
                                                                            fontSize: '12px', fontWeight: '600',
                                                                            textAlign: { xs: 'center', sm: 'right' }
                                                                        }}
                                                                    >
                                                                      Marketing
                                                                    </Typography>

                                                                    <Typography
                                                                        color='#212B36'
                                                                        sx={{
                                                                            fontSize: { xs: '32px', sm: '32px ' },
                                                                            fontWeight: '700',
                                                                            textAlign: { xs: 'center', sm: 'left' }
                                                                        }}
                                                                    >
                                                                      Digital Shose
                                                                    </Typography>

                                                                    <Typography
                                                                        color=' #637381'
                                                                        sx={{
                                                                            alignSelf: 'stretch',
                                                                            textAlign: { xs: 'center', sm: 'left' },
                                                                            fontSize: '14px'
                                                                        }}
                                                                    >
                                                                        Praesent vestibulum dapibus
                                                                        <br /> nibh. Vestibulum fringilla pede sit
                                                                        <br />
                                                                        amet augue..
                                                                    </Typography>



                                                                </Stack>
                                                                <Stack alignItems='flex-end' >
                                                                    <Button variant='text' endIcon={<EastIcon />}
                                                                        sx={{
                                                                            fontWeight: '600',
                                                                            borderRadius: '10px', marginTop: '2rem',
                                                                            width: { xs: '100%', sm: '9rem' }
                                                                        }}
                                                                        size="small"
                                                                    >
                                                                        Learn more
                                                                    </Button>
                                                                </Stack>
                                                            </Box>
                                                        </Box>

                                                    </Box>
                                                </Stack>
                                            </Box>

                                        </Box>
                                        <Stack>
                                            <Box mt={26}
                                                sx={{
                                                    opacity: '1',
                                                    borderRadius: '15px',
                                                    position: 'relative',

                                                }}>

                                                <img src={BallingImg} alt=""
                                                    style={{ borderRadius: '15px' }} />

                                                <div className='overlay-next' style={{ top: '35%', height: '40%' }}>
                                                    <Stack direction='column' spacing={0}>
                                                        <Typography color='#ffffff'
                                                            sx={{ fontSize: '12px', fontWeight: '600', textAlign: 'center', opacity: 0.48 }}
                                                        >
                                                            SEO
                                                        </Typography>

                                                        <Typography
                                                            color='#ffffff'
                                                            sx={{
                                                                fontSize: { xs: '16px', sm: '18px ' },
                                                                fontWeight: '700', textAlign: 'center'
                                                            }}
                                                        >
                                                            Action car
                                                        </Typography>
                                                    </Stack>
                                                </div>
                                            </Box>
                                        </Stack>
                                    </Stack>
                                </Box>

                                <Box>
                                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
                                        <Box
                                            sx={{
                                                opacity: '1',
                                                borderRadius: '15px',
                                                position: 'relative',

                                            }}>

                                            <img src={BallingImg} alt=""
                                                style={{ borderRadius: '15px' }} />

                                            <div className='overlay-next' style={{ top: '15%', height: '20%' }}>

                                                <Stack direction='column' spacing={0}>
                                                    <Typography color='#ffffff'
                                                        sx={{ fontSize: '12px', fontWeight: '600', textAlign: 'center', opacity: 0.48 }}
                                                    >
                                                        SEO
                                                    </Typography>

                                                    <Typography
                                                        color='#ffffff'
                                                        sx={{
                                                            fontSize: { xs: '16px', sm: '18px ' },
                                                            fontWeight: '700', textAlign: 'center'
                                                        }}
                                                    >
                                                        The Zone UI
                                                    </Typography>
                                                </Stack>

                                            </div>
                                        </Box>
                                        <Box>
                                            <Box >
                                                <Stack justifyContent='center' alignItems='center'>
                                                    <Box sx={{ display: 'flex', padding: { xs: '0', md: '10px' } }} className='cs-box-1' >

                                                        <Box >
                                                            <img src={ChairImg} alt=""
                                                                style={{ borderRadius: '15px' }} /></Box>

                                                        <Box sx={{ padding: { xs: '0', md: '20px' }, display: { xs: 'none', md: 'flex' } }}>
                                                            <Box>
                                                                <Stack direction='column'
                                                                    spacing={3}
                                                                    alignItems={{ sm: 'center', md: 'flex-start' }}

                                                                >
                                                                    <Typography color='red'
                                                                        sx={{
                                                                            fontSize: '12px', fontWeight: '600',
                                                                            textAlign: { xs: 'center', sm: 'right' }
                                                                        }}
                                                                    >
                                                                       Digital
                                                                    </Typography>

                                                                    <Typography
                                                                        color='#212B36'
                                                                        sx={{
                                                                            fontSize: { xs: '32px', sm: '32px ' },
                                                                            fontWeight: '700',
                                                                            textAlign: { xs: 'center', sm: 'left' }
                                                                        }}
                                                                    >
                                                                        Minimal UI
                                                                    </Typography>

                                                                    <Typography
                                                                        color=' #637381'
                                                                        sx={{
                                                                            alignSelf: 'stretch',
                                                                            textAlign: { xs: 'center', sm: 'left' },
                                                                            fontSize: '14px'
                                                                        }}
                                                                    >
                                                                        Praesent vestibulum dapibus
                                                                        <br /> nibh. Vestibulum fringilla pede sit
                                                                        <br />
                                                                        amet augue..
                                                                    </Typography>



                                                                </Stack>
                                                                <Stack alignItems='flex-end'>
                                                                    <Button variant='text' endIcon={<EastIcon />}
                                                                        sx={{
                                                                            fontWeight: '600',
                                                                            borderRadius: '10px', marginTop: '2rem',
                                                                            width: { xs: '100%', sm: '9rem' }
                                                                        }}
                                                                        size="small"
                                                                    >
                                                                        Learn more
                                                                    </Button>
                                                                </Stack>
                                                            </Box>
                                                        </Box>

                                                    </Box>
                                                </Stack>
                                            </Box>

                                        </Box>

                                    </Stack>
                                </Box>

                            </Stack>
                        </Box>
                        <Box sx={{ width: { xs: '100%',sm:'50%', lg: '20%' } }}>
                            <Stack>
                                <Box mt={{ xs: 0, md: 40 }}
                                    sx={{

                                        borderRadius: '15px',
                                        position: 'relative',

                                    }}>

                                    <img src={TriangleImg} alt=""
                                        style={{ borderRadius: '15px' }} width='100%' />
                                    <Box sx={{ display: { xs: 'none', md: 'flex' }, }}>
                                        <div className='overlay' style={{ top: '31%', height: '50%' }}>
                                            <Stack direction='column' spacing={2}>
                                                <Typography color='#ffffff'
                                                    sx={{ fontSize: '12px', fontWeight: '600', textAlign: 'center', opacity: 0.48 }}
                                                >
                                                    DEVELOPMENT
                                                </Typography>

                                                <Typography
                                                    color='#ffffff'
                                                    sx={{
                                                        fontSize: { xs: '16px', sm: '16px ' },
                                                        fontWeight: '700', textAlign: 'center'
                                                    }}
                                                >
                                                    Network Firefox
                                                </Typography>
                                            </Stack>


                                        </div>
                                    </Box>
                                </Box>
                            </Stack>
                        </Box>
                    </Stack>

                </Stack>
            </Box>


            <Box mt={{xs:5,md:10}}>
                <Stack alignItems='flex-end' justifyContent={{xs:'center',sm:'center',md:'flex-end'}}>
                    <Button variant='text' endIcon={<EastIcon />} color='warning'
                        sx={{
                            fontWeight: '600',
                            borderRadius: '10px', marginTop: '2rem',
                            width: { xs: '100%', sm: '9rem' }
                        }}
                        size="small"
                    >
                      View All
                    </Button>
                </Stack>
            </Box>
        </Box>
    )
}

export default CaseStudy