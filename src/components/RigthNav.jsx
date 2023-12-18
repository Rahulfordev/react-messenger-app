import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";

import user from "../assets/user-photo.png";

const RigthNav = () => {
  return (
    <div className="right-nav">
      <div className="right__nav--container">
        <div className="right__nav--users">
          <img width="50px" src={user} alt="curr-users" />
          <h2>Mark Zuckerberg</h2>
        </div>
        <div className="right__nav--icons">
          <div className="right__nav--icon">
            <div className="right__nav--profile">
              <AccountCircleIcon />
            </div>

            <span>Profile</span>
          </div>
          <div className="right__nav--icon">
            <div className="right__nav--profile">
              <NotificationsIcon />
            </div>
            <span>Mute</span>
          </div>
          <div className="right__nav--icon">
            <div className="right__nav--profile">
              <SearchIcon />
            </div>
            <span>Search</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RigthNav;
