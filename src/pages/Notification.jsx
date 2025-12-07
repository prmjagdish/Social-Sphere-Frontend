import React from "react";

const notifications = [
  {
    id: 1,
    user: "Ravi Patel",
    avatar: "https://i.pravatar.cc/150?img=5",
    action: "liked your photo",
    time: "2m ago",
  },
  {
    id: 2,
    user: "Nidhi Mehta",
    avatar: "https://i.pravatar.cc/150?img=6",
    action: "commented: 🔥🔥",
    time: "10m ago",
  },
  {
    id: 3,
    user: "Aman Sharma",
    avatar: "https://i.pravatar.cc/150?img=7",
    action: "started following you",
    time: "1h ago",
  },
  {
    id: 4,
    user: "Kiran Joshi",
    avatar: "https://i.pravatar.cc/150?img=8",
    action: "mentioned you in a comment",
    time: "3h ago",
  },
];

function Notification() {
  return (
    <div className="flex justify-center my-5 ">
      <div className="max-w-[420px] flex flex-col justify-center ">
        <h2 className="text-2xl font-bold mb-6 text-sky-400">Notifications</h2>
        <div className="space-y-4">
          {notifications.map((notif) => (
            <div
              key={notif.id}
              className="bg-gray-900 p-4 rounded-xl flex items-center gap-4 shadow-lg hover:bg-gray-800 transition"
            >
              <img
                src={notif.avatar}
                alt="avatar"
                className="w-12 h-12 rounded-full object-cover border-2 border-sky-500"
              />
              <div className="flex-1">
                <p className="text-sm text-gray-300">
                  <span className="font-semibold text-white">{notif.user}</span>{" "}
                  {notif.action}
                </p>
                <span className="text-xs text-gray-500">{notif.time}</span>
              </div>
              <button className="text-sm text-sky-400 hover:underline">
                View
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Notification;
