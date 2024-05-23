
import Login from './components/Login';
import Navbar from './components/Navbar'
import Home from './pages/Home'
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
} from "react-router-dom";



function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/adminLogin" element={<Login />} />


        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
