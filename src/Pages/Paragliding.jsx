import { useState } from 'react'
import { Box, Typography, Tabs, Tab } from '@mui/material'
import serviceBanner from '../Assets/serviceBanner.png'


const Paragliding = () => {

  const [value, setValue] = useState(0);

  const handleTabs = (e, val) => {
    setValue(val)
  }


  return (
    <Box mb={8} >
      <img src={serviceBanner} alt='banner' className='serviceBanner' />
      <Tabs value={value} onChange={handleTabs} centered sx={{ mt: '50px', }} >
        <Tab index={0} label='Paragliding' sx={{  fontSize: { lg:'25px', md:'20px', xs:'11px'} }} />
        <Tab label='Paragliding Day' sx={{ fontSize: { lg:'25px', md:'20px', xs:'11px'} }} />
        <Tab label='Paragliding Course' sx={{ fontSize: { lg:'25px', md:'20px', xs:'11px'} }} />
      </Tabs>
      <Box mt={6} sx={{ mx: { lg:'250px', md: '100px', xs: '10px' }}} >
        <TabPanel value={value} index={0} style={{ marginBottom: '50px' }} >
          <Typography align='justify'>Paragliding flight with expert pilots that will show you a 360° view of Medellin, 
            you will fulfill the dream of flying with experts with more than 20 years of experience.
            If weather conditions are suitable you may be able to fly inside the clouds and enjoy this incredible sensation. 
            Also, the flight will be as relaxing or exciting as you want, 
            just tell the pilot if you want some acrobatic turns and he will do them for you.
          </Typography>
          <Typography fontWeight='bold' mt={2}>Choose your trip:</Typography>
            <ul>
              <li>15 min flight: 45 USD</li>
              <li>20 min flight: 58 USD</li>
              <li>30 min flight: 90 USD</li>
            </ul>
          <Typography fontWeight='bold' >Transportation:</Typography>
          <Typography>You can go directly to the place of departure or hire our transportation service. Prices below:</Typography>
            <ul>
              <li>1 - 4 persons: 30 USD</li>
              <li>5 - 6 persons: 36 USD</li>
              <li>7 or more: Subject to verification</li>
            </ul>
          <Typography fontWeight='bold'>Departure point:</Typography>
          <Typography >El Poblado, Medellín, Antioquia</Typography>
          <Typography fontWeight='bold' mt={2} >This includes:</Typography>
            <ul>
              <li>Runway rights</li>
              <li>Insurance policy</li>
              <li>Expert pilot</li>
              <li>National and International license</li>
              <li>Certified equipment</li>
              <li>Photos and videos</li>
            </ul>
            <Typography fontWeight='bold' mt={2} >Availability:</Typography>
            <Typography >Every day</Typography>
            <Typography fontWeight='bold' mt={2}>Location:</Typography> 
            <Typography>Estadero El Voladero, San Felix, Bello, Antioquia</Typography>
            <Typography fontWeight='bold' mt={2}>Duration:</Typography> 
            <Typography>3 to 4 hours</Typography>
            <Typography fontWeight='bold' mt={2}>Start:</Typography> 
            <Typography>9:00 am</Typography>
            <Typography fontWeight='bold' mt={2}>Minimum age:</Typography> 
            <Typography>3 years old accompanied by a responsible adult</Typography>
            <Typography fontWeight='bold' mt={2} >Note:</Typography>
            <ul>
              <li>Reserve 24 hours before your trip</li>
              <li>You don't need any knowledge about flying, a few minutes before the pilot will give you all the instructions</li>
              <li>The flight depends on weather conditions and passenger behavior</li>
              <li>Logistics will be in charge of organizing the departure of the flights in the place where you will live the experience</li>
              <li>Have a minimum of 3 to 4 hours to live this experience</li>
              <li>Maximum weight per person of 135 kg</li>
              <li>If you are in Medellín we will pick you up if you hire the transport service</li>
            </ul>
            <Typography fontWeight='bold'>Recomendations:</Typography> 
            <ul>
              <li>Eat at least one hour before your flight</li>
              <li>Get dress with comfortable clothes, long pants, closed shoes</li>
              <li>Sunglasses</li>
              <li>Sunscreen</li>
              <li>This experience is not suitable for people with: heart problems, pregnancy status, vertigo, 
                surgeries or interventions less than 6 months, uncontrolled psychiatric illnesses, uncontrolled epilepsy, height phobia, 
                uncontrolled hypertension, flu or flu-like symptoms, fever, 
                if you have been in contact with COVID-19 positive people in the last 14 days, if you are COVID-19 positive</li>
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
        </TabPanel>
        <TabPanel value={value} index={1} style={{ marginBottom: '50px' }} >
          <Typography align='justify'>If you are an adrenaline lover and you love to take on challenges, this is the perfect one, 
            live the experience of learning how to control and handle a paraglide on the ground, 
            differentiate the equipment and all its parts that compose it and a little bit of aerodynamics and meteorology.
          </Typography>
          <Typography fontWeight='bold' mt={2}>Value:</Typography>
          <Typography>112 USD</Typography>
          <Typography fontWeight='bold' mt={2}>Transportation:</Typography>
          <Typography>You can go directly to the place of departure or hire our transportation service. Prices below:</Typography>
            <ul>
              <li>1 - 4 persons: 30 USD</li>
              <li>5 - 6 persons: 36 USD</li>
              <li>7 or more: Subject to verification</li>
            </ul>
          <Typography fontWeight='bold'>Departure point:</Typography>
          <Typography >El Poblado, Medellín, Antioquia</Typography>
          <Typography fontWeight='bold' mt={2} >This includes:</Typography>
            <ul>
              <li>Runway rights</li>
              <li>Insurance policy</li>
              <li>Expert pilot</li>
              <li>Certified equipment</li>
              <li>Photos and videos</li>
              <li>Theoretical class</li>
              <li>Practical class</li>
              <li>Instructive flight of 30 minutes</li>
            </ul>
            <Typography fontWeight='bold' mt={2} >Availability:</Typography>
            <Typography >Monday to Saturday</Typography>
            <Typography fontWeight='bold' mt={2}>Location:</Typography> 
            <Typography>Estadero El Voladero, San Felix, Bello, Antioquia</Typography>
            <Typography fontWeight='bold' mt={2}>Duration:</Typography> 
            <Typography>3 to 4 hours</Typography>
            <Typography fontWeight='bold' mt={2}>Start:</Typography> 
            <Typography>7:00 am</Typography>
            <Typography fontWeight='bold' mt={2}>Minimum age:</Typography> 
            <Typography>18 years old</Typography>
            <Typography fontWeight='bold' mt={2} >Activities:</Typography>
            <ul>
              <li>Theoretical class of the parts that make up a complete paragliding equipment</li>
              <li>Brief explanation of the spot where the activity will be practiced</li>
              <li>Begin the practice accompanied by an instructor with more than 20 years of experience, additional certified at international level and awarded in several competitions worldwide</li>
              <li>Instructive flight of 30 minutes where you will learn the technique in the air</li>
            </ul>
            <Typography fontWeight='bold' mt={2} >Note:</Typography>
            <ul>
              <li>Reserve 3 days before your trip</li>
              <li>You don't need any knowledge about flying, a few minutes before the pilot will give you all the instructions</li>
              <li>The flight depends on weather conditions and passenger behavior</li>
              <li>Logistics will be in charge of organizing the departure of the flights in the place where you will live the experience</li>
              <li>Have a minimum of 3 to 4 hours to live this experience</li>
              <li>Maximum weight per person of 135 kg</li>
              <li>If you are in Medellín we will pick you up if you hire the transport service</li>
            </ul>
            <Typography fontWeight='bold'>Recomendations:</Typography> 
            <ul>
              <li>Eat at least one hour before your flight</li>
              <li>Get dress with comfortable clothes, long pants, closed shoes</li>
              <li>Sunglasses</li>
              <li>Sunscreen</li>
              <li>This experience is not suitable for people with: heart problems, pregnancy status, vertigo, 
                surgeries or interventions less than 6 months, uncontrolled psychiatric illnesses, uncontrolled epilepsy, height phobia, 
                uncontrolled hypertension, flu or flu-like symptoms, fever, 
                if you have been in contact with COVID-19 positive people in the last 14 days, if you are COVID-19 positive</li>
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
        </TabPanel>
        <TabPanel value={value} index={2} style={{ marginBottom: '50px' }} >
          <Typography align='justify'>
            Are you ready to embark on an extraordinary journey into the world of paragliding? Look no further! 
            Our paragliding school offer a comprehensive and professional learning experience that will transform your 
            dreams of flying into a reality.<br />
            <br/>
            Safety and professionalism are at the core of our teaching philosophy. With our expert instructors and 
            state-of-the-art equipment, we provide a secure and controlled environment for you to gain the confidence and 
            tranquility needed to soar through the skies with ease. Whether you're a complete beginner or have never even 
            taken a tandem or tourist flight, our course is designed to take you from ground zero to the heights of 
            paragliding mastery.<br/>
            <br/>
            The course is divided into two stages, combining both theoretical and practical classes. While theoretical knowledge 
            is essential, we believe that the true magic happens in the practical sessions. That's why we focus on giving you 
            ample opportunities to apply your skills and experience the exhilaration of flight firsthand. From your very first 
            flight, you'll be hooked, and each subsequent flight will become a source of pure joy and fulfillment.<br/>
            <br/>
            Our teaching methodology is tailored to your needs, allowing you to progress at your own pace while acquiring the 
            ideal techniques to make every flight a pleasure. Our dedicated instructors will guide you through each step of the 
            learning process, providing personalized attention and invaluable insights to help you reach new heights.
          </Typography>
          <Typography fontWeight='bold' mt={2}>Value:</Typography>
          <Typography>1000 USD</Typography>
          <Typography fontWeight='bold' mt={2}>Transportation:</Typography>
          <Typography>You can go directly to the place of departure or hire our transportation service. Prices below:</Typography>
            <ul>
              <li>1 - 4 persons: 30 USD</li>
              <li>5 - 6 persons: 36 USD</li>
              <li>7 or more: Subject to verification</li>
            </ul>
          <Typography fontWeight='bold'>Departure point:</Typography>
          <Typography >El Poblado, Medellín, Antioquia</Typography>
          <Typography fontWeight='bold' mt={2} >This includes:</Typography>
            <ul>
              <li>Runway rights</li>
              <li>Insurance policy</li>
              <li>Expert pilot</li>
              <li>Certified equipment</li>
              <li>Photos and videos</li>
              <li>Theoretical class</li>
              <li>Practical class</li>
              <li>2 tandem instruction flights</li>
              <li>15 high altitude flights</li>
              <li>Book of initiation</li>
              <li>Certification to apply for FAI sport license 
                (requires affiliation to a club registered with fedeaereos)</li>
            </ul>
            <Typography fontWeight='bold'>Theoretical Classes:</Typography>
            <ul>
              <li>Flight safety</li>
              <li>Meteorology</li>
              <li>Flight rules</li>
              <li>Knowledge of the materials</li>
            </ul>
            <Typography fontWeight='bold'>Practical Classes:</Typography>
            <ul>
              <li>1st phase. Paraglider inflation practice</li>
              <li>2nd phase. Practice of take-off and landing</li>
              <li>3rd phase. Tandem instruction flights</li>
              <li>4th phase. High altitude flights</li>
            </ul>
            <Typography fontWeight='bold' mt={2} >Availability:</Typography>
            <Typography >Monday to Saturday</Typography>
            <Typography fontWeight='bold' mt={2}>Location:</Typography>
            <ul>
              <li>Estadero El Voladero, San Felix, Bello, Antioquia</li>
              <li>Barbosa meeting point</li>
              <li>Titiribí at the Mine</li>
              <li>Jericó at the local Voladero</li>
            </ul>
            <Typography>Estadero El Voladero, San Felix, Bello, Antioquia</Typography>
            <Typography fontWeight='bold' mt={2}>Duration:</Typography> 
            <Typography>10 to 20 days of practice. 3 to 4 hours each class</Typography>
            <Typography fontWeight='bold' mt={2}>Start:</Typography> 
            <Typography>7:00 am</Typography>
            <Typography fontWeight='bold' mt={2}>Minimum age:</Typography> 
            <Typography>18 years old</Typography>
            <Typography fontWeight='bold' mt={2} >Note:</Typography>
            <ul>
              <li>The instructor will be in charge of organizing the departure and schedule of the places where you will practice</li>
              <li>Classes must be coordinated 2 days in advance</li>
              <li>You don't need any knowledge about flying</li>
              <li>The flight depends on weather conditions and passenger behavior</li>
              <li>Have a minimum of 3 to 4 hours to each class</li>
              <li>Maximum weight per person of 135 kg</li>
              <li>If you are in Medellín we will pick you up if you hire the transport service</li>
              <li>The course has an expiration period if the student does not return to class within 3 months</li>
            </ul>
            <Typography fontWeight='bold'>Recomendations:</Typography> 
            <ul>
              <li>Eat at least one hour before your flight</li>
              <li>Get dress with comfortable clothes, long pants, closed shoes</li>
              <li>Sunglasses</li>
              <li>Sunscreen</li>
              <li>This experience is not suitable for people with: heart problems, pregnancy status, vertigo, 
                surgeries or interventions less than 6 months, uncontrolled psychiatric illnesses, uncontrolled epilepsy, height phobia, 
                uncontrolled hypertension, flu or flu-like symptoms, fever, 
                if you have been in contact with COVID-19 positive people in the last 14 days, if you are COVID-19 positive</li>
              <li>Remember that this experience depends on favorable weather conditions, otherwise, you will be able to reschedule the date</li>
              <li>When you arrive to our spot place of flight, we must enter your data through the runway managers, 
                then you are going to have a introduction with the pilot. They will tell you all the processes of the experience, 
                in addition we will activate your insurance policy</li>
            </ul>
        </TabPanel>
      </Box>
    </Box>

  )
}

export default Paragliding



function TabPanel(props){

  const { children, value, index } = props

  return(
    <Box>
        { value === index && (
          <Typography>{children}</Typography>
        )}
    </Box>
  )
}