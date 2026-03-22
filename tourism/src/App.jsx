import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import { Homepage } from './Home/Homepage/Homepage'
import { Ooty } from './Home/Destinations/Ooty'
import { Madurai } from './Home/Destinations/Madurai'
import { Coimbatore } from './Home/Destinations/Coimbatore'
import { Chennai } from './Home/Destinations/Chennai'
import { Kanyakumari } from './Home/Destinations/Kanyakumari'
import { Rameswaram } from './Home/Destinations/Rameswaram'
import { Header } from './Header/Header'
import { Footer } from './Footer/Footer'
import { About } from './Home/About/About'
import { PhotoGallery } from './Home/Gallery/photogallery'

function App() {


  return (
     <BrowserRouter>
      <Header/>
     <Routes>
      {/* Destination */}
      <Route path='/' element={<Homepage/>}/>
      <Route path='/destinations/ooty' element={<Ooty/>}/>
      <Route path='/destinations/madurai' element={<Madurai/>}/>
      <Route path='/destinations/coimbatore' element={<Coimbatore/>}/>
      <Route path='/destinations/chennai' element={<Chennai/>}/>
      <Route path='/destinations/kanyakumari' element={<Kanyakumari/>}/>
      <Route path='/destinations/rameswaram' element={<Rameswaram/>}/>
      {/* About */}
      <Route path='/More/about' element={<About/>}/>
      {/* Gallery */}
      <Route path='/gallery/photo-gallery' element={<PhotoGallery/>}/>

     </Routes>
      <Footer/>
     </BrowserRouter>
    
   
  )
}

export default App
