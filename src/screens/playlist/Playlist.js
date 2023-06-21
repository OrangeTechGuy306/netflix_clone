import React from 'react'
import Nav from "../../components/nav/Nav"
import "./Playlist.css"
import * as Unicons from "@iconscout/react-unicons"
import playView from "../../assets/playview2.jpeg"
import Seriescomp from '../../components/seriescomp/Seriescomp'
import Footer from "../../components/footer/Footer"




const Playlist = () => {
  return (

        <section>
            <Nav/>
            <div className='playlistContainer'>

                <div className='playlistSidebar'>

                    <div className='playlistSideItems'>
                        <Unicons.UilHome  className="playlistIcon"/>
                        <p>Home</p>
                    </div>
                    
                    <div className='playlistSideItems'>
                        <Unicons.UilHeartAlt   className="playlistIcon"/>
                        <p>Favourite</p>
                    </div>

                    <div className='playlistSideItems'>
                        <Unicons.UilSchedule  className="playlistIcon"/>
                        <p>Last Week</p>
                    </div>

                    <div className='playlistSideItems'>
                        <Unicons.UilCalendarSlash  className="playlistIcon"/>
                        <p>Last Month</p>
                    </div>
                    
                    <div className='playlistSideItems'>
                        <Unicons.UilFilm   className="playlistIcon"/>
                        <p>Watch Later</p>
                    </div>


                </div>  

                <div className='playlistViews'>
                    <div className='playlistViewFlyer'>
                        <img src={playView} alt='' className='playviewImg'/>
                        <div className='movieInfoContainer'>
                        <h1>PROJECT POWER</h1>
                        <h3>Director: Obianuju John</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam aliquam ipsam maxime saepe sed, nihil totam veniam expedita eum, itaque mollitia, iste accusantium libero quam impedit? Dolore impedit voluptates, a facere aperiam doloribus asperiores. Totam</p>
                        <div className='moviePlayBtn'>
                        <button className='btnPlay'><Unicons.UilPlayCircle/> Play Now</button>
                        <button className='btnLater'><Unicons.UilPresentationPlay /> Watch Later</button>
                        </div>
                    </div>
                    </div>

                    <div className='playlistTitleContainer'>
                        <h3>FAVOURITE</h3>
                        <Seriescomp/>
                    </div>

                    <div className='playlistTitleContainer'>
                        <h3>LAST WEEK</h3>
                        <Seriescomp/>
                    </div>

                    <div className='playlistTitleContainer'>
                        <h3>LAST MONTHS</h3>
                        <Seriescomp/>
                    </div>

                    <div className='playlistTitleContainer'>
                        <h3>WATCH LATER</h3>
                        <Seriescomp/>
                    </div>

                </div>


            </div>

            <Footer/>
        </section>
  )
}

export default Playlist