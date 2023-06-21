import React from 'react'
import "./Homeshow.css"
import Nav from "../../components/nav/Nav"
import moana from "../../assets/mortal.jpg"
import Seriescomp from '../../components/seriescomp/Seriescomp'
import * as Unicons from "@iconscout/react-unicons"
import Footer from "../../components/footer/Footer"


const Homeshow = () => {
  return (
    <section>
        <Nav/>
        <div className='homeshowFlyerContainer'>
            <img src={moana} className='homeFlyerImg' alt=''/>

            <div className='movieInfoContainer'>
                <h1>The Mortal Combat</h1>
                <h3>Director: Obianuju John</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam aliquam ipsam maxime saepe sed, nihil totam veniam expedita eum, itaque mollitia, iste accusantium libero quam impedit? Dolore impedit voluptates, a facere aperiam doloribus asperiores. Totam odit temporibus quos, non porro ex minima illo, quis a sunt perspiciatis deleniti atque dolor?</p>
                <div className='moviePlayBtn'>
                    <button className='btnPlay'><Unicons.UilPlayCircle/> Play Now</button>
                    <button className='btnLater'><Unicons.UilPresentationPlay /> Watch Later</button>
                </div>
            </div>

            <div className='typeContainer'>
                <h1>MOVIES</h1>
            </div>
        </div>

        <div className='movieGenres'>
           <h3>TRENDING</h3>
           <hr/>
           <Seriescomp/>
        </div>
        <div className='movieGenres'>
           <h3>NEW RELEASE</h3>
           <hr/>
           <Seriescomp/>
        </div>
        <div className='movieGenres'>
           <h3>POPULAR</h3>
           <hr/>
           <Seriescomp/>
        </div>
        <div className='movieGenres'>
           <h3>ACTION</h3>
           <hr/>
           <Seriescomp/>
        </div>
        <div className='movieGenres'>
           <h3>COMEDY</h3>
           <hr/>
           <Seriescomp/>
        </div>
        <div className='movieGenres'>
           <h3>CRIME</h3>
           <hr/>
           <Seriescomp/>
        </div>
        <div className='movieGenres'>
           <h3>DRAMA</h3>
           <hr/>
           <Seriescomp/>
        </div>
        <div className='movieGenres'>
           <h3>DRAMA</h3>
           <hr/>
           <Seriescomp/>
        </div>
        <div className='movieGenres'>
           <h3>CONTINUE TO WATCH</h3>
           <hr/>
           <Seriescomp/>
        </div>

         <Footer/>
    </section>
  )
}

export default Homeshow