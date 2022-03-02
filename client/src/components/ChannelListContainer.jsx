import React from "react";
import { ChannelList, useChatContext } from "stream-chat-react";
import { ChannelSearch, TeamChannelList, TeamChannelPreview } from "./";
import Cookies from "universal-cookie";
import HospitalIcon from "../assets/hospital.png";

const SideBar = () => (
  <div className="channel-list_sidebar">
    <div className="channel-list_sidebar_icon">
      <div className="icon1_inner">
        <img src={HospitalIcon} alt="Hospital" width="30" />
      </div>
    </div>
  </div>
);

function ChannelListContainer() {
  return <div>ChannelListContainer</div>;
}

export default ChannelListContainer;
