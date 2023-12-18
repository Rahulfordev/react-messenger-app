import Input from "./Input";
import CallIcon from "@mui/icons-material/Call";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import InfoIcon from "@mui/icons-material/Info";

import user from "../assets/user-photo.png";

const Message = () => {
  return (
    <div className="message">
      <div className="message__nav--items">
        <div className="message__nav--users">
          <img width="30px" src={user} alt="message-user" />
          <h3>Mark Zuckerberg</h3>
        </div>

        <div className="message__nav--icons">
          <CallIcon />
          <VideoCallIcon />
          <InfoIcon />
        </div>
      </div>

      <div className="message__nav--message">
        <img width="35px" src={user} alt="message-user" />
        <h3>Mark Zuckerberg</h3>
      </div>
      <Input />
    </div>
  );
};

export default Message;
