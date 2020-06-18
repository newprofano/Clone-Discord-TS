import React from "react";
import {
  Container,
  Profile,
  Avatar,
  UserData,
  Icons,
  MicIcons,
  HeadphoneIcon,
  SettingsIcons,
} from "./styles";

const UserInfo: React.FC = () => {
  return (
    <Container>
      <Profile>
        <Avatar />
        <UserData>
          <strong>Christian Furlan</strong>
          <span>#Noob</span>
        </UserData>
      </Profile>

      <Icons>
        <MicIcons />
        <HeadphoneIcon />
        <SettingsIcons />
      </Icons>
    </Container>
  );
};

export default UserInfo;
