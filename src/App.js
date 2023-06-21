import React from 'react'
import {Routes, Route} from "react-router-dom"
import Homepage from './screens/homepage/Homepage'
import Login from './screens/login/Login'
import Homeshow from './screens/homeshow/Homeshow'
import Series from './screens/series/Series'
import Playlist from './screens/playlist/Playlist'
import View from './screens/view/View'

const App = () => {
  return (
    <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/home' element={<Homeshow/>}/>
        <Route path='/series' element={<Series/>}/>
        <Route path='/playlist' element={<Playlist/>}/>
        <Route path='/view' element={<View/>}/>
    </Routes>
  )
}

export default App