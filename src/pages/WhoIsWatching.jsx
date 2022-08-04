import React, { useEffect, useState } from "react";
import Logo from "../assets3/logo.svg";
import { Profile } from "../components/Profile";
import "../styles/whoiswatching.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
import { useNavigate } from "react-router-dom";

function WhoIsWatching() {
  const navigate=useNavigate();
  const [showProfile, setShowProfile] = useState(false);
  const [profile, setProfile] = useState([]);

  let user = JSON.parse(localStorage.getItem("currentUser"));

  const profiles=collection(db,"profiles")


  useEffect(() => {
    const getProfiles = async () => {
      const data = await getDocs(profiles);
      setProfile(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getProfiles();
  }, [profile]);

  


  return (
    <>
      {showProfile && (
        <Profile setShowProfile={setShowProfile} uid={user.uid} />
      )}

      <header id="header">
        <nav id="nav">
          <img src={Logo} alt="logo" />
        </nav>
      </header>
      <main id="main">
        <div id="wrapper">
          <p>Who's watching?</p>
          <div id="avatarContainer">
           {profile.map(item=> <div
           key={item.id}
            className="avatar">
              <img
              onClick={()=>navigate('/home')}
                src="https://occ-0-4409-3647.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABRmtNzyg7zV6EC3TQGMQqbhKrAGB42lxYLSPWRqTJ_yxIx8W7rL-Abhyr7Goh0TCHU6f2b66nJAZ3sKpsYqw0HIr61mR.png?r=125"
                alt="photo"
              />
              <p>{item.username}</p>
            </div>)}
          </div>
          <button onClick={() => setShowProfile(true)}>{profile.length===0?"Create Profile":"Manage Profiles"}</button>
        </div>
      </main>
    </>
  );
}

export default WhoIsWatching;
