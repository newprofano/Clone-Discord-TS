import React from "react";

import { Container, Category, AddCategoryIcon } from "./styles";
import ChannelButton from "../ChannelButton";

const ChannelList = () => {
  return (
    <Container>
      <Category>
        <span>Canais de Texto</span>
        <AddCategoryIcon />
      </Category>

      <ChannelButton channelName="Smitezin" />
      <ChannelButton channelName="Csgo" />
      <ChannelButton channelName="Valourant" />
      <ChannelButton channelName="Brawzin" />
      <ChannelButton channelName="Geral" />
    </Container>
  );
};

export default ChannelList;
