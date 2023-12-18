/* eslint-disable react/no-unescaped-entities */
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { FaEdit } from "react-icons/fa";
import SearchIcon from "@mui/icons-material/Search";
import { NavLink } from "react-router-dom";

const LeftNavbar = () => {
  return (
    <>
      <div className="left-nav">
        <div className="left__icons-one">
          <div className="left__chat">
            <h4>Chats</h4>
          </div>
          <div className="left__icon">
            <ul>
              <li>
                <HiOutlineDotsHorizontal />
              </li>
              <li>
                <FaEdit />
              </li>
            </ul>
          </div>
        </div>

        <div className="left__search--items">
          <div>
            <SearchIcon />
          </div>
          <input type="text" placeholder="Search Messenger" />
        </div>

        <div className="left__message--items">
          <NavLink>Inbox</NavLink>
          <NavLink>Communities</NavLink>
        </div>

        <div className="left__message--users">
          <div>{/* single use */}</div>
        </div>
      </div>
    </>
  );
};

export default LeftNavbar;
