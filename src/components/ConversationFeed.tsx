import * as React from "react";
import styled from "@emotion/styled";

import colors from "../colors";
import MessageBubble from "./MessageBubble";

import { Message } from "../types";

interface ConversationFeedProps {
  messages: Message[];
}

type MessageSort = (l: Message, r: Message) => number;
const diffDates = (l: Date, r: Date): number => (new Date(l) as any) - (new Date(r) as any);
const sortMessagesByDateAsc: MessageSort = (l, r) => Math.sign(diffDates(l.sentAt, r.sentAt));
const sortMessagesByDateDesc: MessageSort = (l, r) => sortMessagesByDateAsc(r, l);

const ConversationFeed: React.FC<ConversationFeedProps> = ({ messages }) => {
  return (
    <Layout>
      {messages.sort(sortMessagesByDateDesc).map(m => (
        <MessageBubble key={m.id} message={m} />
      ))}
    </Layout>
  );
};
export default ConversationFeed;

const Layout = styled.div`
  color: ${colors["text-color"]};

  display: flex;
  flex-direction: column-reverse;
  flex-grow: 1;
`;
