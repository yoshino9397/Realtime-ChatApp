import "./message.css";

const Message = ({ message, own }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <img className="messageImg" src={PF + "person/ash.jpg"} alt="" />
        <p className="messageText">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non,
          voluptas tempore quae porro deserunt nobis quas excepturi, ipsam,
          quidem voluptate esse natus recusandae dolorum aliquid inventore
          debitis ut nulla explicabo!
        </p>
      </div>
      <div className="messageBottom">1min ago</div>
    </div>
  );
};

export default Message;
