import React, { useEffect, useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {Login as Lgn, Signup} from '../redux/actions/actions';
import Logo from '../assets3/logo.svg';
import '../styles/login.css';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/config';



function Login() {
  const navigate=useNavigate();
  const dispatch=useDispatch()
  const[signup,setSignup]=useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');




const handleLogin=()=>{
  dispatch(Lgn(email,password))
}
useEffect(()=>{
onAuthStateChanged(auth,(data)=>{
if(data) navigate('/whoiswatching');
else if(!data) navigate('/login')
})
  

},[])


const handleSignup=()=>{
  dispatch(Signup(email,password))
}




  return (
  <main>
    <nav>
      <img src={Logo} alt="logo" />
    </nav>
    {!signup?<div className="card">
      <p className="title">Sign In</p>
      <div className="form">
        <input value={email} onChange={e=>setEmail(e.target.value)} type="email" placeholder='Email or phone number' />
        <input value={password} onChange={e=>setPassword(e.target.value)} type="password" placeholder='Password' />
      <button onClick={handleLogin}>Sign In</button>
      </div>
      <p className="signup">New to Netflix? <span onClick={()=>setSignup(true)}>Sign up now</span></p>
    </div>:<div className="card">
      <p className="title">Sign Up</p>
      <div className="form">
        <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" placeholder='Email or phone number' />
        <input onChange={(e)=>setPassword(e.target.value)} value={password} type="password" placeholder='Password' />
      <button onClick={handleSignup}>Sign Up</button>
      </div>
    
    </div>}
  </main>
  )
}

export default Login