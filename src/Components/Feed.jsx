import ServiceInfo from "./ServiceInfo"
import Banner from '../Assets/Banner.mp4'
import { Stack, Divider, Box, Typography } from "@mui/material"

const Feed = () => {
  return (
    <Box>
      <video autoPlay muted src={Banner} width="100%" loop="true" />
      <Stack p={10} spacing={6}>
        <Typography variant='h2' align='center' fontWeight='bold' >Live The Most Wonderfull Experience With Us!</Typography>
        <Typography align='center' variant='h5'>
          Discover hidden gems, explore rugged trails, soar through the skies, and conquer off-road terrains, all while creating unforgettable memories. Our dedicated guides and instructors are here to ensure your safety and provide you with an extraordinary journey. Whether you're a nature enthusiast or an adventure seeker, our tailored services cater to your desires. Unleash your inner adventurer today and book your unforgettable escapade with [Your Company Name]. Let's embark on an adventure together that will leave you craving for more.
        </Typography>
      </Stack>
      <Stack spacing={8} divider={<Divider />}  >
          <ServiceInfo name='Paragliding' />
          <ServiceInfo name='ATV Tour' reverse />
          <ServiceInfo name='Guatape Tour' />
          <ServiceInfo name='Comuna 13 Tour' reverse />
          <ServiceInfo name='Football Tour' />
          <ServiceInfo name='Mountain Bike' reverse />
      </Stack>
    </Box>
  )
}

export default Feed