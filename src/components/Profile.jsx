import "../styles/profile.css";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import { useState } from "react";

export const Profile = ({ setShowProfile, uid }) => {
  const [text, setText] = useState("");

  const handleSubmit = async () => {
    try {
      const docRef = await addDoc(collection(db, "profiles"), {
        uid: uid,
        username: text,
        img: "https://occ-0-4409-3647.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABRmtNzyg7zV6EC3TQGMQqbhKrAGB42lxYLSPWRqTJ_yxIx8W7rL-Abhyr7Goh0TCHU6f2b66nJAZ3sKpsYqw0HIr61mR.png?r=125",
      });
    if(docRef){
      setShowProfile(false);
    }
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div className="profileOverlay">
      <div className="profileCard">
        <p>Create Profile</p>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text"
          placeholder="enter profile name"
        />
        <button onClick={handleSubmit}>Create</button>
        <button onClick={() => setShowProfile(false)}>Close</button>
      </div>
    </div>
  );
};
