import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import {TaskPage} from './pages/TaskPage';
import {TaskFormPage} from './pages/TaskFormPage';
import {Navigation} from './components/Navigation';
import { Toaster } from 'react-hot-toast';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
       <div className='container mx-auto'>
       <Navigation/>
        <Routes>
          <Route path='/' element={<Navigate to='/tasks'/>}/>
          <Route path='/tasks' element={<TaskPage/>}/>
          <Route path='/tasks' element={<TaskPage/>}/>
          <Route path='/tasks-create' element={<TaskFormPage/>}/>
          <Route path='/tasks/:id' element={<TaskFormPage/>}/>
        </Routes>
      <Toaster/>
       </div>
    </BrowserRouter>
  )
}

export default App

      

