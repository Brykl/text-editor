import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import DenseAppBar from './pages/components/appbar'
import Home from './pages/home';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
     <DenseAppBar />
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
