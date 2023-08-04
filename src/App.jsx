import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
// import Card from './components/Cards/Card'
// import ApiCard from './components/ApiCard'
// import Header from './components/Header/Header'
import LandingPage from './components/LandingPage/LandingPage'
import Cart from './components/Cart/Cart'
import Login from './components/Auth/Login'
import SignUp from './components/Auth/SignUp'
import { Layout } from './Layout'

function App() {


  return (
    <div>
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route path='/' element={<Layout />}>
            {/* <Route path='/' element={<LandingPage />} /> */}
            <Route path='/Cart' element={<Cart />} />
          </Route>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      </BrowserRouter>
      {/* <ApiCard/> */}
    </div>
  )
}

export default App
