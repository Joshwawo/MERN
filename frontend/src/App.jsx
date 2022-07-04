import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import ShowBlogs from './Components/ShowBlogs'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CreateBlog from './Components/CreateBlog'
import EditBlog from './Components/EditBlog'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<ShowBlogs/>}/>
        <Route path='/create' element={  <CreateBlog/>  } />
        <Route path='/edit/:id' element={  <EditBlog/>  } />

      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
