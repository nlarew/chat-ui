/** @jsx jsx */
import * as React from "react";
import styled from "@emotion/styled";
import { css, jsx } from "@emotion/core";

import colors from "../colors";
import { Message } from "../types";

interface MessageBubbleProps {
  message: Message;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => {
  return (
    <Container>
      <SentBy>{message.sentBy.name}</SentBy>
      <MessageText>{message.text}</MessageText>
    </Container>
  );
};
export default MessageBubble;

const Container = styled.div`
  /* background: ${"lightblue"}; */
  padding: 8px;
`;
const MessageText = styled.span``;
const SentBy = styled.div`
  color: lightblue;
  font-style: italic;
`;
