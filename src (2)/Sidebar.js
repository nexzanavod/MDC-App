import React from "react";
import './Sidebar.css';
import SidebarOption from "./SidebarOption";

import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutLineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Link } from 'react-router-dom';
function Sidebar() {
    return (

        <div className="sidebar">
            <SidebarOption active Icon={HomeIcon} />
            <SidebarOption active Icon={HomeIcon} text="Home" />
            <SidebarOption Icon={SearchIcon} text="Explore" />
            <SidebarOption Icon={NotificationsNoneIcon} text="Ministries"></SidebarOption>
            <SidebarOption Icon={MailOutLineIcon} text="Messages" />
            <SidebarOption Icon={BookmarkBorderIcon} text="Chatty" />
            <SidebarOption Icon={BookmarkBorderIcon} text="News" />
            <SidebarOption Icon={BookmarkBorderIcon} text="Vacancies" />

            <div className="infor">
                <a href="https://www.google.com">
                    <SidebarOption Icon={ListAltIcon} text="Information" />
                </a>
            </div>
            <SidebarOption Icon={PermIdentityIcon} text="Profile" />


            <button variant="outLined" className="sidebar__tweet" >SEND</button>
        </div>
    )
}

export default Sidebar;