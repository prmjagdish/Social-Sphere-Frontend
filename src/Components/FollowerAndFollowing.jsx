import React, { useState } from "react";
import user from "../Data/User";

const FollowerAndFollowing = ({followers,following}) => {
  const [showModal, setShowModal] = useState(null);

  return (
    <div className="flex gap-6 text-sm  text-gray-300">
      {/* <div className="flex gap-2"> <span>{user.posts}</span> <span>Posts</span></div> */}
      <div className="flex gap-6">
        <button
          onClick={() => setShowModal("followers")}
          className="hover:text-teal-400 transition"
        >
          <div className="flex gap-2">
            <span>{followers}</span>
            <span>Followers</span>
          </div>
        </button>
        <button
          onClick={() => setShowModal("following")}
          className="hover:text-teal-400 transition"
        >
          <div className="flex gap-2">
            <span>{following}</span> 
            <span>Followings</span>
          </div>
        </button>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center">
          <div className="bg-gray-900 text-white rounded-xl p-6 w-[90%] max-w-md shadow-xl">
            <h3 className="text-lg font-semibold mb-4 capitalize text-sky-300">
              {showModal}
            </h3>
            <div className="">
              <ul className="space-y-2 text-sm max-h-60 snap-y ">
                {[1, 2, 1, 1, 1, 1].map((name, i) => (
                  <li
                    key={i}
                    className="flex justify-between items-center px-2 bg-gray-800 rounded"
                  >
                    <div
                      key={i}
                      className="flex items-center justify-between mb-3"
                    >
                      <div className="flex items-center gap-3">
                        <div>
                          <img
                            className="w-8 h-8 rounded-full"
                            src={user.avatar}
                            alt=""
                          />
                        </div>
                        <div className="texhover:underlinet-sm font-small text-sm text-gray-300 flex flex-col">
                          <p className="">{user.name}</p>
                          <span className="text-xs">{user.username}</span>
                        </div>
                      </div>
                    </div>
                    <button className="text-indigo-600 text-sm font-medium ">
                      View
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <button
              onClick={() => setShowModal(null)}
              className="mt-4 text-sm text-gray-400 hover:text-white "
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FollowerAndFollowing;
