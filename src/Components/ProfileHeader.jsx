import React, { useEffect, useState , useContext} from "react";
import { FaEdit } from "react-icons/fa";
import ProfileEditForm from "./ProfileEditForm";
import FollowerAndFollowing from "./FollowerAndFollowing";
import { ProfileContext} from "../Context/ProfileContext";
import axios from "axios";

const ProfileHeader = () => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [profile, setProfile] = useState(null);
  // const { profile, setProfile} = useContext(ProfileContext);

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

  if (!profile)
    return <p className="text-center text-gray-500 mt-10">Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-2">
        <img
          src={profile.user.avatar}
          alt="avatar"
          className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-4 border-teal-500 shadow-lg mx-auto sm:mx-0"
        />
        <div className="flex flex-col justify-between items-center">
          <div className="text-center sm:text-center flex-1 mb-1 ">
            <h2 className="text-xl sm:text-2xl font-bold text-sky-300">
              {profile.user.name}
            </h2>
            <p className="text-xs sm:text-sm text-gray-400">
              @{profile.user.username}
            </p>
            <p className="mt-2 text-sm sm:text-base text-gray-300">
              {profile.user.bio}
            </p>
          </div>
          <FollowerAndFollowing
            followers={profile.followers.length}
            following={profile.following.length}
          />
        </div>

        <button
          onClick={() => setShowEditModal(true)}
          className=" sm:ml-auto px-3 bg-gradient-to-r from-sky-600 to-sky-700 hover:from-sky-500 hover:to-sky-600 rounded-md text-xs sm:text-sm font-medium flex items-center  shadow self-center sm:self-auto"
        >
          <FaEdit className="text-sm sm:text-base" />
          Edit Profile
        </button>

        {showEditModal && (
          <ProfileEditForm
            username={profile.user.username}
            setShowEditModal={setShowEditModal}
            setProfile={setProfile}
          />
        )}
      </div>
    </div>
  );
};

export default ProfileHeader;
