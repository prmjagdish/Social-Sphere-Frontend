import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {

  const [profile, setProfile] = useState(null);

 useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);

    axios
      .get("http://localhost:8080/api/profile/me", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log("Profile API response:", res.data);
        setProfile(res.data);
      })
      .catch((err) => console.error("Error fetching profile:", err));
  }, []);

  return (
    <ProfileContext.Provider value={{ profile, setProfile }}>
      {children}
    </ProfileContext.Provider>
  );
}

export default ProfileProvider;