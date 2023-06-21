import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import orangeFlix from "../../assets/orangeflix.png"
import "./Nav.css"
import * as Unicons from "@iconscout/react-unicons"

const Nav = () => {

  // window.scroll()

  const [open, setOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const handleMenu=()=>{
    setMenuOpen(!menuOpen)
  }
  const toggleSearch=()=>{
      setOpen(!open)
  }
  const handleSearchChange=()=>{}
  const handleSearch=()=>{}

  return (
    <section>
         <div className='navContainer'>
              <nav className={menuOpen ? 'navItemsContainer' : 'navItemClose'}>
                  
                  <div className='logoContainer'>
                      <img src={orangeFlix} alt="" className='logoImg'/>
                  </div>

                 <ul>
                    <li><Link to="/"><img src={orangeFlix} alt="" className='orangeFlix'/></Link></li>
                    <li><Link to="/home" className='navLinks'>Home</Link></li>
                    <li><Link to="/series" className='navLinks'>TV shows</Link></li>
                    <li><Link to="/movies" className='navLinks'>Movies</Link></li>
                    <li><Link to="/new" className='navLinks'>Latest</Link></li>
                    <li><Link to="/playlist" className='navLinks'>My Playlist</Link></li>
                 </ul>

                 <div className='loginBtnContainer'>
            
                       { open ? <form onSubmit={handleSearch} className='searchForm'>
                        
                          <input type='text' className='searchInput' onChange={handleSearchChange} name='search' placeholder="Search movie"/>
                          <button className='searchBtn' type='submit'>
                             <Unicons.UilSearch color="white"/>
                          </button>
                        </form> : null}

                        <div className='btnToggle'>
                          {open ? 
                            <Unicons.UilTimes color="white" onClick={toggleSearch} className="searchToggle"/> :
                            <Unicons.UilSearch color="white" onClick={toggleSearch} className="searchToggle"/>
                        
                        }
                         <button><Link to="/login" className='btnLoginLink'>Login</Link></button>
                        </div>
                  </div>

                  <div className='hamBtnContainer'>
                        <Unicons.UilBars color="red" size={30} className={menuOpen ? "hamBtnRotate" : "hamBtn"} onClick={handleMenu}/>
                  </div>

              </nav>
         </div>
    </section>
  )
}

export default Nav