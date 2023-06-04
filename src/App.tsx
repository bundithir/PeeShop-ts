import {Route ,Routes} from 'react-router-dom'
import { Nav } from './Components/Nav/Nav'
import { Home } from './Routes/Home/Home'
import { Men } from './Routes/Men/Men'
import { Women } from './Routes/Women/Women'
import { Kids } from './Routes/Kids/Kids'
import Signin from './Routes/Sign/Signin/Signin'
import Signup from './Routes/Sign/Signup/Signup'

const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Nav/>}>
        <Route index element={<Home/>}/>
        <Route path='/men/*' element={<Men/>}/>
        <Route path='/women/*' element={<Women/>}/>
        <Route path='/kids/*' element={<Kids/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Route>
    </Routes>
  )
}

export default App
