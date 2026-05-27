import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import PanelLayout from './layout/panel-layout/panel-layout'
import Auth from './pages/auth/Auth' 

function App() {
  return ( 
    <>
      <BrowserRouter>                 
        <Routes>
          <Route path="/" element={<PanelLayout />} />
          <Route path="login" element={<Auth />} />
          <Route 
            path="*"
            element={<div className="text-center">This page not found</div>}
          /> 
        </Routes> 
      </BrowserRouter>
    </>
  );
}
 
export default App;