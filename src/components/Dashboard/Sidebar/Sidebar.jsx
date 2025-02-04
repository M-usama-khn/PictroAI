import React from "react";
import Dropdown from "../DropDown/Profile/ProfileDropdown";
import site_logo from "@images/site_logo.svg";
import aiIcon from "@icons/AI.png";
import canvasIcon from "@icons/canvas.png";
import apiIcon from "@icons/API.png";
import communityIcon from "@icons/Community.png";
import profileIcon from "@icons/Profile.png";
import manageIcon from "@icons/Manage.png";
import supportIcon from "@icons/Support.png";
import userPictroIcon from "@icons/User_Pictro.png";
import {Link} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import "./sidebar.scss";

const Sidebar = () => {
  const { userpoints } = useSelector((state) => state.auth);
    const points = userpoints ? userpoints : '';

  return (
    <>
      <aside className="sideBar">
      
        <div className="sideBar_tools">
          
          <div className="tools_list">
            <ul className="list-unstyled mb-0">
              <li>
                <Link
                  to=""
                  className="d-flex align-items-center gap-2 text-white"
                >
                  <img src={aiIcon} alt="AI" />
                  AI Magic Tools
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="d-flex align-items-center gap-2 text-white"
                >
                  <img src={canvasIcon} alt="AI" />
                  Canvas
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="d-flex align-items-center gap-2 text-white"
                >
                  <img src={apiIcon} alt="AI" />
                  Pictro API
                </Link>
              </li>
              <li>
                <Link
                  to="https://discord.gg/5tmEV3KBfz"
                  className="d-flex align-items-center gap-2 text-white"
                >
                  <img src={communityIcon} alt="AI" />
                  Community Feed
                </Link>
              </li>
              <li>
                <Link
                  to="/profile"
                  className="d-flex align-items-center gap-2 text-white"
                >
                  <img src={profileIcon} alt="AI" />
                  Profile
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="sideBar_tools mt-3">
          <div className="tools_list">
            <ul className="list-unstyled mb-0">
              {/* <li>
                <Link
                  to=""
                  className="d-flex align-items-center gap-2 text-white"
                >
                  <img src={manageIcon} alt="AI" />
                  Manage Subscription
                </Link>
              </li> */}
              <li>
                <Link
                  to="https://discord.gg/B2dCZuSQAY"
                  className="d-flex align-items-center gap-2 text-white"
                >
                  <img src={supportIcon} alt="AI" />
                  Customer Support
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="sideBar_tools upgrade_plan mt-3 px-4">
          <span className="text-black bg-white rounded-2 py-2 px-3 free_btn mb-2">
            {points} <i className="bi bi-star-fill"></i>
            &nbsp; &nbsp; Free
          </span>
          <h3 className="text-white text-center mb-2">
            Get more out of PICTRO!
          </h3>
          <p className="mb-4 text-center">
            Craft magical AI artworks without limits and share them.
          </p>
          <Link
            to="/pricing"
            className="btn btn-primary upgrade_btn d-flex align-items-center gap-2 justify-content-center"
          >
            <img src={manageIcon} alt="" />
            Upgrade Plan
          </Link>
        </div>

        <div className="sideBar_tools user_pictro mt-3 px-4">
          <Dropdown />
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
