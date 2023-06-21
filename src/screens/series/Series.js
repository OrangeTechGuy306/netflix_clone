import React from 'react'
import Seriescomp from "../../components/seriescomp/Seriescomp"
import moana from "../../assets/avatar.jpg"
import Nav from '../../components/nav/Nav'
import * as Unicons from "@iconscout/react-unicons"
import "./Series.css"
import Footer from "../../components/footer/Footer"



const Series = () => {
  return (
    <section>
        <Nav/>
            <div className='homeshowFlyerContainer'>
                    <img src={moana} className='homeFlyerImg' alt=''/>
                    <div className='movieInfoContainer'>
                        <h1>AVATAR</h1>
                        <h3>Director: Obianuju John</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam aliquam ipsam maxime saepe sed, nihil totam veniam expedita eum, itaque mollitia, iste accusantium libero quam impedit? Dolore impedit voluptates, a facere aperiam doloribus asperiores. Totam odit temporibus quos, non porro ex minima illo, quis a sunt perspiciatis deleniti atque dolor?</p>
                        <div className='moviePlayBtn'>
                        <button className='btnPlay'><Unicons.UilPlayCircle/> Play Now</button>
                        <button className='btnLater'><Unicons.UilPresentationPlay /> Watch Later</button>
                        </div>
                    </div>

                    <div className='typeContainer'>
                        <h1>SERIES</h1>
                    </div>  
            </div>

            <div>
              <div className='seriesContainer'>
                  <h1>HOLLYWOOD</h1>
              </div>
                  <Seriescomp/>
            </div>
            <div>
              <div className='seriesContainer'>
                  <h1>KOREAN</h1>
              </div>
                  <Seriescomp/>
            </div>
            <div>
              <div className='seriesContainer'>
                  <h1>CHINESE</h1>
              </div>
                  <Seriescomp/>
            </div>
            <div>
              <div className='seriesContainer'>
                  <h1>BOLLYWOOD</h1>
              </div>
                  <Seriescomp/>
            </div>

            <Footer/>
    </section>
  )
}

export default Series