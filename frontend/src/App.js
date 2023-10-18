import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/Header'
import PrivateRoute from './components/PrivateRoute'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import NewAsset from './pages/NewAsset'
import Assets from './pages/Assets'


function App() {
  
  return (
    <>
      <Router>
        <div className="container">
          <Header/>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/new-asset' element={<PrivateRoute />}>
              <Route path='/new-asset' element={<NewAsset />} />              
              </Route>
              <Route path='/assets' element={<PrivateRoute />}>
              <Route path='/assets' element={<Assets/>} />              
              </Route>
          </Routes>
        </div>

      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
