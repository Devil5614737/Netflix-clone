import React, { useEffect, useState } from "react";
import Logo from "../assets3/logo.svg";
import { Profile } from "../components/Profile";
import "../styles/whoiswatching.css";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { db } from "../firebase/config";
import { useNavigate } from "react-router-dom";

function WhoIsWatching() {
  const navigate = useNavigate();
  const [showProfile, setShowProfile] = useState(false);
  const [profile, setProfile] = useState([]);

  let user = JSON.parse(localStorage.getItem("currentUser"));

  const profiles = collection(db, "profiles");
  useEffect(() => {
    const q = query(profiles, where("uid", "==", user.uid));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setProfile(
        snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
      );
    });
    return () => {
      unsubscribe();
    };
  }, []);

const handleDelete=async(id)=>{

  await deleteDoc(doc(db, "profiles", id));

}
useEffect(()=>{
alert('double click on avatar to delete profile')
},[])

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
            {profile.map((item) => (
              <div key={item.id} className="avatar">
                <img
                onDoubleClick={()=>handleDelete(item.id)}
                  onClick={() => navigate("/home")}
                  src={item.data.img}
                  alt="photo"
                />
                <p>{item.data.username}</p>
              </div>
            ))}
          </div>
          <button onClick={() => setShowProfile(true)}>
            {profile.length === 0 ? "Create Profile" : "Manage Profiles"}
          </button>
        </div>
      </main>
    </>
  );
}

export default WhoIsWatching;
