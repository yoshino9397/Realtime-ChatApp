import axios from "axios";
import { useEffect, useState } from "react";
import "./chatOnline.css";

const ChatOnline = () => {
  const [friends, setFriends] = useState([]);
  const [onlineFriends, setOnlineFriends] = useState([]);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const handleClick = () => {};
  return (
    <div className="chatOnline">
      {/* {onlineFriends.map((o) => ( */}
      {/* <div className="chatOnlineFriend" onClick={() => handleClick(o)}> */}
      <div className="chatOnlineFriend">
        <div className="chatOnlineImgContainer">
          <img
            className="chatOnlineImg"
            // src={
            //   o?.profilePicture
            //     ? PF + o.profilePicture
            //     : PF + "person/noAvatar.png"
            // }
            src={PF + "person/ash.jpg"}
            alt=""
          />
          <div className="chatOnlineBadge"></div>
        </div>
        {/* <span className="chatOnlineName">{o?.username}</span> */}
        <span className="chatOnlineName">Ash</span>
      </div>
      {/* ))} */}
    </div>
  );
};

export default ChatOnline;
