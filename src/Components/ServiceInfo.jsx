import { Box, Button, Stack, Typography } from "@mui/material"
import ReactPlayer from "react-player";

const ServiceInfo = ({ name, reverse }) => {


  return (
    <Box 
        sx={{
            width: '100%',
            height: {xl:'500px', lg:'auto', xs:'auto'},
            backgroundColor: '#fff',
            marginTop: '50px',
            justifyContent: 'center'
        }}
    >
        <Stack direction={ reverse ? 'row-reverse' : 'row' }  sx={{ display: 'flex', flexWrap:'wrap', justifyContent:'space-around', alignItems: 'center'}} >
            <ReactPlayer url='https://www.youtube.com/watch?v=l88pd1eHM70' className="react-player"  />
            <Stack justifyContent='center' alignItems='center' spacing={7} sx={{ width: '800px'}} >
                <Typography sx={{ fontSize: {lg:'3.75rem', xs:'3rem'}, marginTop:{xs:'30px'}}}>{name}</Typography>
                <Typography variant='h5' pl={12} pr={12} align="justify" sx={{ padding: { xs: '20px'}}}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, veniam velit quaerat id accusamus unde recusandae? Architecto consequuntur doloremque cum? Optio, mollitia accusamus laboriosam laudantium quaerat id minus deleniti consequuntur.
                </Typography>
                <Button variant='contained' size="large" >View More</Button>
            </Stack>
        </Stack>
    </Box>
  )
}

export default ServiceInfo