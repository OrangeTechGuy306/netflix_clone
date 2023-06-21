import React, { useState } from 'react'
import "./Getstarted.css"
import { Fade } from 'react-reveal'
import Nav from '../nav/Nav'


const Getstarted = () => {

    const [showPassword, setShowPassword] = useState(false)
    const [values, setValues] = useState({
        email:"",
        password:""
    })

    const {email, password} = values

    
    const handleChange=(e)=>{
        setValues({...values,[e.target.name]:e.target.value})
    }

    const handleClick=()=>{
        if(!email){
            alert("enter valid pa")
        }else{
            setShowPassword(true)
        }
    }
    const handleSubmit=(e)=>{e.preventDefault();}



  return (
    <section>
    <Nav/>
        <div className='homepgContainer'>

            <div className='homepageContent'>
                <Fade right>
                    <h1>Unlimited movie, Tv shows and more.</h1>
                </Fade>
                <Fade left>
                    <h3>Watch anywhere, cancel anytime</h3>
                </Fade>
                <Fade right>
                    <h5>Ready to watch? Enter your email to create or restart your membership</h5>
                </Fade>

                <form onSubmit={handleSubmit} className='getStartedForm'>
                { showPassword ?
                    <div className='getStartedInputContainer'>
                        <Fade left>
                            <input type='password' className='getStartedInput' name='password' onChange={handleChange} placeholder='Enter Password...'/>
                        </Fade>
                    </div>
                    : 
                    <div className='getStartedInputContainer'>
                        <Fade left>
                            <input type='email' className='getStartedInput' name='email' onChange={handleChange}  placeholder='Enter Email....'/>
                        </Fade>
                    </div>
                    }
                    <div className='getStartedInputContainer'>
                        <Fade right>
                             <input type='submit' className='getStartedBtn' value="Get started" onClick={handleClick}/>
                        </Fade>
                    </div>
                </form>
            </div>

            <div className='homepgOverlay'></div>
        </div>
    </section>
  )
}

export default Getstarted