import React from 'react'
import "./View.css"
import {JolPlayer} from "jol-player"
import testingVid from "../../assets/testing.mp4"
import moana from "../../assets/mortal.jpg"
import Seriescomp from "../../components/seriescomp/Seriescomp"
import Nav from "../../components/nav/Nav"
import Footer from '../../components/footer/Footer'


const View = () => {


  return (

        <section>
            <Nav/>
                <div className='viewContainer'>
                    <div className='vidView'>
                        <JolPlayer 
                        option={{
                                videoSrc:testingVid,
                                poster: moana,
                                // height: 420,
                                language:"en",
                                // width:600,
                                // isToast: true
                    }}  className='vidPlayer'/>

                        <div className='vidInfo'>
                            <div className='vidtitle'>
                                <h3>TITLE:</h3>
                                <h3>Project Power</h3>
                            </div>

                            <div className='vidGenre'>
                                <h3>GENRES:</h3>
                                <p>Action</p>
                                <p>Thriller</p>
                                <p>Crime</p>
                                <p>Adventure</p>
                            </div>

                            <div className='vidactors'>
                                <h3>FEATURES:</h3>
                                <p>Jason Statham</p>
                                <p>D rock</p>
                                <p>Jackie Chan</p>
                                <p>Vin Diesel</p>
                            </div>

                            <div className='viddesc'>
                                <h3>MORE ABOUT THE MOVIE:</h3>
                                <p>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, consequatur quis excepturi blanditiis perspiciatis ut a autem magni reprehenderit dolore. Eum, veniam non? Totam tenetur aut ipsum repudiandae cumque. Non, repudiandae consequuntur. Facere obcaecati voluptatem debitis sint fugit magnam in, vel perferendis quis doloremque perspiciatis, nihil cupiditate exercitationem eius reprehenderit labore ut provident dolores saepe architecto aut blanditiis corporis earum. Eligendi officia earum fuga? Soluta similique sequi, nihil reiciendis fugiat tenetur adipisci nobis! Amet illo, omnis, minus dolorem ipsum saepe iure laborum expedita sint mollitia ducimus perferendis dignissimos facilis earum soluta voluptates voluptatibus reiciendis eveniet voluptatum similique vel? Mollitia, odio!</p>
                            </div>

                        </div>

                    </div>

                    <div className='relatedmovieContainer'>
                        <h3>RELATED MOVIES</h3>
                        <Seriescomp/>
                    </div>


                </div>
            <Footer/>
        </section>
    )

    
}

export default View