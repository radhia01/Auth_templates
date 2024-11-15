

import './App.css'
import SignUp from './pages/SignUp'
import {Routes,Route} from "react-router-dom"
import SignIn from './pages/SignIn'

function App() {
  return (
    <div  >  
    
    <Routes >
    <Route path="/" element={<SignIn/>}></Route>
    <Route path="/signUp" element={<SignUp/>}></Route> 
  </Routes>
  </div>)
}

export default App
