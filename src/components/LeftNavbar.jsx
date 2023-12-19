/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { FaEdit } from "react-icons/fa";
import SearchIcon from "@mui/icons-material/Search";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import UserApi from "./UserApi";

const LeftNavbar = () => {
  const [users, setUser] = useState([]);

  const url = "https://randomuser.me/api/?results=50";

  const userData = async (users) => {
    try {
      const responsive = await fetch(users);
      const data = await responsive.json();
      setUser(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    userData(url);
  }, []);

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
          <div className="left__search--icon">
            <SearchIcon />
          </div>
          <input type="text" placeholder="Search Messenger" />
        </div>

        <div className="left__message--items">
          <NavLink className="indox">Inbox</NavLink>
          <NavLink>Communities</NavLink>
        </div>

        <div className="left__message--users">
          <div>
            {users &&
              users?.results?.map((user, i) => <UserApi user={user} key={i} />)}
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftNavbar;
