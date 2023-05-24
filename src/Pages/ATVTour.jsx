import { Box, Typography, Stack } from "@mui/material"
import serviceBanner from '../Assets/serviceBanner.png'
import ATV1 from '../Assets/ATV1.jpg'
import ATV2 from '../Assets/ATV2.jpg'
import ATV3 from '../Assets/ATV3.jpg'
import ATV4 from '../Assets/ATV4.jpg'
import ATV5 from '../Assets/ATV5.jpg'
import ATV6 from '../Assets/ATV6.jpg'


const ATVTour = () => {

  return (
    <Box mb={8}>
      <img src={serviceBanner} alt='banner' className='serviceBanner' />
      <Typography fontWeight='bold' align='center' sx={{display:'flex', justifyContent:'center', margin:{lg:'80px', xs:'10px'}, fontSize: {lg:'1.8rem', xs:'1.2rem'}}} >
        Are you ready for an adrenaline-pumping experience that will take your breath away? Look no further than our 
        ATV tours! Get ready to embark on an exhilarating journey through rugged terrains, picturesque landscapes, 
        and untamed wilderness that will leave you with unforgettable memories!
      </Typography>
      <Stack direction='row'  sx={{ display:'flex', flexWrap:'wrap', justifyContent:'center', mx:'80px'  }} >
          <img src={ATV1} alt='ATV1' className='atvImage' />
          <img src={ATV2} alt='ATV2' className='atvImage' />
          <img src={ATV3} alt='ATV3' className='atvImage' />
          <img src={ATV4} alt='ATV4' className='atvImage' />
          <img src={ATV5} alt='ATV5' className='atvImage' />
          <img src={ATV6} alt='ATV6' className='atvImage' />
      </Stack>      
      
      <Box mt={6} sx={{ mx: { lg:'250px', md: '100px', xs: '10px' }}} >        
        <Typography fontWeight='bold' mt={2}>Value:</Typography>
        <Typography>56 USD. Extra passenger 12 USD</Typography>
        {/* <Typography fontWeight='bold' mt={2}>Transportation:</Typography>
        <Typography>You can go directly to the place of departure or hire our transportation service. Prices below:</Typography>
          <ul>
            <li>1 - 4 persons: 30 USD</li>
            <li>5 - 6 persons: 36 USD</li>
            <li>7 or more: Subject to verification</li>
          </ul> */}
        {/* <Typography fontWeight='bold'>Departure point:</Typography>
        <Typography >El Poblado, Medellín, Antioquia</Typography> */}
        <Typography fontWeight='bold' mt={2} >This includes:</Typography>
          <ul>
            <li>Automatic four-wheel drive vehicle model 2022</li>
            <li>Professional guide who will accompany you in the experience</li>
            <li>Medical insurance policy</li>
            <li>Safety helmet</li>
            <li>Boots</li>
            <li>Photos and videos</li>
          </ul>
        <Typography fontWeight='bold' mt={2} >Availability:</Typography>
        <Typography >Monday to Sunday between 9.00 am and 3:00 pm</Typography>
        <Typography fontWeight='bold' mt={2}>Location:</Typography> 
        <Typography>Envigado loma Del Escobero, Medellin Colombia</Typography>
        <Typography fontWeight='bold' mt={2}>Duration:</Typography> 
        <Typography>2 hours tour and 4 hours for the whole activity</Typography>
        <Typography fontWeight='bold' mt={2}>Start:</Typography> 
        <Typography>Scheduled with the customer</Typography>
        <Typography fontWeight='bold' mt={2}>Minimum age:</Typography> 
        <Typography>Driver must be over 16 years old</Typography>
        <Typography fontWeight='bold' mt={2} >Note:</Typography>
        <ul>
          <li>Reserve 24 hours before your trip</li>
          <li>Do not be intoxicated or under the influence of psychoactive substances</li>
          <li>At the time of booking, we will send you the route so you can arrive directly to the place</li>
          <li>Have a minimum of 4 hours to live this experience</li>
          <li>This experience is not suitable for people with: heart problems, pregnancy status, surgeries or interventions 
            less than 6 months, uncontrolled psychiatric illnesses, uncontrolled epilepsy, uncontrolled hypertension, 
            flu symptoms or flu, fever, if you have been in contact with COVID-19 positive people in the last 14 days, 
            if you are positive for COVID-19</li>
          <li>The terrain has medium difficulty. You must have a stable health condition, no previous experience is required</li>
        </ul>
        <Typography fontWeight='bold'>Recomendations:</Typography> 
        <ul>
          <li>Wear comfortable clothes that are easy to dry, long sleeves, cap and closed-toe shoes</li>
          <li>Bring a change of clothes and towel</li>
          <li>Sunglasses</li>
          <li>Sunscreen</li>
          <li>Remember that this experience depends on favorable weather conditions, otherwise, you will be able to reschedule the date</li>
          <li>When you arrive to our spot place of flight, we must enter your data through the runway managers, 
            then you are going to have a introduction with the pilot. They will tell you all the processes of the experience, 
            in addition we will activate your insurance policy</li>
        </ul>
        <Typography fontWeight='bold'>Important:</Typography>
          <ul>
            <li>If you cancel 2 or more days in advance you are entitled to a 100% refund</li>
            <li>When canceling one day in advance, i.e. 24 hours in advance, you are entitled to a 75% refund</li>
            <li>Attempting to cancel the same day or no-show will be charged 100%</li>
          </ul>
      </Box>
    </Box>
  )
}

export default ATVTour