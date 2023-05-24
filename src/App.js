import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route  } from "react-router-dom"
import { Box } from "@mui/material"
import ATVTour from "./Pages/ATVTour"
import Comuna13Tour from "./Pages/Comuna13Tour"
import FootballTour from "./Pages/FootballTour"
import GuatapeTour from "./Pages/GuatapeTour"
import MountainBike from "./Pages/MountainBike"
import Paragliding from "./Pages/Paragliding"
import Feed from "./Components/Feed";



const App = () => {
  return (
    <BrowserRouter>
      <Box>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Feed />} />
          <Route path="/ATVTour" exact element={<ATVTour />} />
          <Route path="/Comuna13Tour" element={<Comuna13Tour />} />
          <Route path="/FootballTour" element={<FootballTour />} />
          <Route path="/GuatapeTour" element={<GuatapeTour />} />
          <Route path="/MountainBike" element={<MountainBike />} />
          <Route path="/Paragliding" element={<Paragliding />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
