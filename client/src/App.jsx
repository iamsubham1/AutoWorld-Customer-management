
import Login from './components/Login';
import Navbar from './components/Navbar'
import CarEntry from './pages/CarEntry';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Home from './pages/Home';
import AdminDashboard from './pages/AdminDashboard';
import Footer from './components/Footer';
import UnauthorizedPage from './pages/UnauthorziedPage';


function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carEntry" element={<CarEntry />} />
          <Route path="/adminLogin" element={<Login />} />
          <Route path="/dashboard" element={<AdminDashboard />} />
          <Route path="/unauthorized" element={<UnauthorizedPage />} />
          <Route path="/*" element={<h1 className='text-8xl text-white'>404</h1>} />

        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  )
}

export default App
