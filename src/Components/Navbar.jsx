import { Link, AppBar, Stack, Avatar, Typography, SwipeableDrawer, Divider } from '@mui/material'
import { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'

const navigationLinks = [
    {name: 'Paragliding', href: '/paragliding'},
    {name: 'ATV Tour', href: '/ATVTour'},
    {name: 'Guatape Tour', href: '/GuatapeTour'},
    {name: 'Mountain Bike', href: '/MountainBike'},
    {name: 'Football Tour', href: '/FootballTour'},
    {name: 'Comuna 13 Tour', href: '/Comuna13Tour'}
]

const menuItems = navigationLinks.map((item) => (
    <Link
        color='#f5f5f5' 
        variant='button' 
        underline='none' 
        marginRight={10} 
        href={item.href} 
    >
        {item.name}
    </Link>
))


const Navbar = () => {

    const [open, setOpen] = useState(false)

  return (
    <AppBar position="sticky" >
        <Stack direction="row" alignItems="center" p={2} sx={{ justifyContent: 'space-between', height: '50px'}} >
            <Link href='/'>
                <Avatar sx={{ml: {lg:'80px', xs:'10px'}}} >P</Avatar>
            </Link>
                <Typography sx={{ display: { xl: 'block', xs: 'none' } }}>
                    {menuItems}
                </Typography>
                <MenuIcon sx={{ display: { xl: 'none', xs: 'block' }, mr: {lg:'80px', xs:'10px'}, cursor: 'pointer' }} onClick={() => setOpen(!open)} />
                <SwipeableDrawer anchor='right' open={open} >
                    <ChevronRightIcon sx={{ ml: '8px', p: '14px', cursor: 'pointer'}} onClick={() => setOpen(!open)}  /> 
                    <Divider />
                    <Typography sx={{ display: 'flex', flexDirection: 'column', padding: '30px', height:'300px', justifyContent: 'space-around'}}>
                        {menuItems}
                    </Typography>
                </SwipeableDrawer>  
        </Stack>
    </AppBar>
  )
}

export default Navbar