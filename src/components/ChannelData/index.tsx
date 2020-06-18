import React, { useRef, useEffect } from "react";

import { Container, Messages, InputWrapper, Input, InputIcon } from "./styles";
import ChannelMessage, { Mention } from "../ChannelMessage";

const ChannelData: React.FC = () => {
  const messageRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messageRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messageRef]);

  return (
    <Container>
      <Messages ref={messageRef}>
        <ChannelMessage
          author="Christian Furlan"
          date="17/06/2020"
          content="Será que ta parecido?"
        />
        <ChannelMessage
          author="Christian Furlan"
          date="17/06/2020"
          content="Será que ta parecido?"
        />
        <ChannelMessage
          author="Christian Furlan"
          date="17/06/2020"
          content="Será que ta parecido?"
        />
        <ChannelMessage
          author="Christian Furlan"
          date="17/06/2020"
          content="Será que ta parecido?"
        />
        <ChannelMessage
          author="Christian Furlan"
          date="17/06/2020"
          content="Será que ta parecido?"
        />
        <ChannelMessage
          author="Christian Furlan"
          date="17/06/2020"
          content="Será que ta parecido?"
        />
        <ChannelMessage
          author="Christian Furlan"
          date="17/06/2020"
          content="Será que ta parecido?"
        />
        <ChannelMessage
          author="Christian Furlan"
          date="17/06/2020"
          content="Será que ta parecido?"
        />
        <ChannelMessage
          author="Christian Furlan"
          date="17/06/2020"
          content="Será que ta parecido?"
        />
        <ChannelMessage
          author="Christian Furlan"
          date="17/06/2020"
          content="Será que ta parecido?"
        />

        <ChannelMessage
          author="newprofano"
          date="17/06/2020"
          content={
            <>
              <Mention>@Christian Furlan</Mention>, Quase xD
            </>
          }
          hasMentions
          isBot
        />
      </Messages>
      <InputWrapper>
        <Input type="text" placeholder="Conversar em #Chat-Livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;
