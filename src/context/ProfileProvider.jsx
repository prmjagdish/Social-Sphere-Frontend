import { useState, useEffect } from "react";
import { ProfileContext } from "./ProfileContext.jsx";

const ProfileProvider = ({ children }) => {
  const [profile, setProfile] = useState(null);

  // useEffect(() => {
  //   const fetchProfile = async () => {
  //     try {
  //       const data = await getMyProfile();
  //       setProfile(data);
  //     } catch (err) {
  //       console.error("Error fetching profile:", err);
  //     }
  //   };

  //   fetchProfile();
  // }, []);

  

  return (
    <ProfileContext.Provider value={{ profile, setProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileProvider;
