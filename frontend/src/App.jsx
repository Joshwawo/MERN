import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import './index.css'
import ShowBlogs from './Components/ShowBlogs'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import CreateBlog from './Components/CreateBlog'
import EditBlog from './Components/EditBlog'
import Blog from './Blog'
import Error404 from './Components/Error404'

function App() {

  return (
    <div className="App">
      {/* <header className="App-header">
        <h1 className=' '>Entradas </h1>
        
        
      </header> */}
      <BrowserRouter>
    
      <Routes>
        <Route path='/' element={<ShowBlogs/>}/>
        <Route path='/blog/:id' element={<Blog/>} />
        <Route path='/create' element={  <CreateBlog/>  } />
        <Route path='/edit/:id' element={  <EditBlog/>  } />
        <Route path='*' element={<Error404/>}/>


      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
