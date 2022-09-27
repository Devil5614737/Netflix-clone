import Logo from '../assets3/logo.svg';
import {BsFillBellFill} from 'react-icons/bs';
import {GoSearch} from 'react-icons/go';
import { useEffect, useState } from 'react';
import {useDispatch} from 'react-redux';
import {searchMovie} from '../redux/actions/actions';
import { useNavigate ,Link} from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/config';

export const Navbar=()=>{
    const navigate=useNavigate()
    const dispatch=useDispatch()
const [query,setQuery]=useState('');
const [logoutBox,setLogoutBox]=useState(false)


    
const myDebounce=(cb,d)=>{
    let timer;
    return function (...args){
        if(timer) clearTimeout(timer);
        timer=setTimeout(()=>{
            cb(...args);
        },d)
    }
}


useEffect(()=>{
if(query){
    navigate('/results')
}
},[query])


const handleChange=myDebounce((e)=>{
    setQuery(e.target.value)
},500)






useEffect(()=>{
    ToggleNav();
   ToggleSearch();
})

useEffect(()=>{
if(query){
dispatch(searchMovie(query))
}
},[query])




function ToggleSearch(){
    const search=document.getElementById('searchIcon');
    const input=document.querySelector('.input');
    search.addEventListener('click',()=>{
        input.classList.toggle('active')
    })
}
function ToggleNav(){
    const nav=document.querySelector('.nav');
window.addEventListener('scroll',()=>{
    if(window.scrollY>200){
        nav.classList.add('active')
    }else{
        nav.classList.remove('active')
    }
})
}

const handleLogout=()=>{
    signOut(auth).then(() => {
        navigate('/login')
      }).catch((error) => {
        alert(error)
      });
}


    return (
        <>
        <nav className='nav '>
            <div className="container">
                <div className="left">
                    <div className="logo">
                        <Link to='/home'><img src={Logo} alt="logo" /></Link>
                    </div>
                    <div className="links">
                        <ul>
                            <li><a href="#!">Home</a></li>
                            <li><a href="#!">Series</a></li>
                            <li><a href="#!">Films</a></li>
                            <li><a href="#!">New & Popular</a></li>
                            <li><a href="#!">My List</a></li>
                            <li><a href="#!">Audio & Subtitles</a></li>
                        </ul>
                        
                    </div>
                </div>
                <div className="right">
                    <input  onChange={handleChange}  className='input ' placeholder='search by name' type="text" />
                    <GoSearch id='searchIcon' style={{fontSize:22,marginRight:20,cursor:'pointer'}}/>
                    <BsFillBellFill style={{fontSize:22,marginRight:20,cursor:'pointer'}}/>
                    <img onClick={()=>setLogoutBox(true)} src="https://occ-0-4409-3647.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABRmtNzyg7zV6EC3TQGMQqbhKrAGB42lxYLSPWRqTJ_yxIx8W7rL-Abhyr7Goh0TCHU6f2b66nJAZ3sKpsYqw0HIr61mR.png?r=125" alt="user avatar" />
                </div>
            </div>
        </nav>
        {logoutBox&& <div id="logoutBox">
            <a href="#!" onClick={()=>navigate('/whoiswatching')}>Go to profiles</a>
            <a href="#!" onClick={handleLogout}>Logout</a>
            <a href="#!" onClick={()=>setLogoutBox(false)}>Close</a>
        </div>}
       
        </>
    )
}