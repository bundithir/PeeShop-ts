import {Route ,Routes} from 'react-router-dom'
import { Nav } from './Components/Nav/Nav'
import { Home } from './Routes/Home/Home'
import { Men } from './Routes/Men/Men'
import { Women } from './Routes/Women/Women'
import { Kids } from './Routes/Kids/Kids'
import Signin from './Routes/Sign/Signin/Signin'
import Signup from './Routes/Sign/Signup/Signup'
import Summary from './Routes/Summary/Summary'
import Admin from './Routes/Admin/Admin'
import Checkout from './Routes/Checkout/Checkout'

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
        <Route path='/summary' element={<Summary/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/admin' element={<Admin/>}/>
      </Route>
    </Routes>
  )
}

export default App
