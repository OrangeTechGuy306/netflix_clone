import React, { useState } from 'react'
import "./Login.css"
import { Fade } from 'react-reveal'
import Nav from '../../components/nav/Nav'
import Footer from "../../components/footer/Footer"

const Login = () => {

    const [values, setValues] = useState({
        email:"",
        password:""
    })

    const {email, password} = values

    
    const handleChange=(e)=>{
        setValues({...values,[e.target.name]:e.target.value})
    }


    const handleLoginSubmit = (e)=>{e.preventDefault()}


  return (
    <section>
        <div className='loginContainer'>
        <Nav/>
            <form onSubmit={handleLoginSubmit} className='loginForm'>
                <div className='loginInputContainer'>
                    <h1>Sign In</h1>
                </div>
                <div className='loginInputContainer'>
                   <Fade bottom>
                        <input type='email' name='email' placeholder='Enter your Email...' className='loginInput' onChange={handleChange}/>
                   </Fade>
                </div>
                <div className='loginInputContainer'>
                  <Fade right>
                      <input type='password' name='password' placeholder='Enter your Password...' className='loginInput' onChange={handleChange}/>
                  </Fade>
                </div>
                <div className='loginInputContainer'>
                  <Fade top>
                     <input type='submit' value='Login' className='loginBtn'/>
                  </Fade>
                </div>
            </form>
            <div className='loginOverlay'></div>
        </div>
        <Footer/>
    </section>
  )
}

export default Login