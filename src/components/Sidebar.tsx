/** @jsx jsx */
import * as React from "react";
import styled from "@emotion/styled";
import { css, jsx } from "@emotion/core";

import colors from "../colors";
import { Channel, ConversationID, Maybe, Conversation } from "../types";
import { CurrentConversationSetter } from "../hooks/useCurrentConversation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { resolveConversationName } from "./Composer";

interface SidebarProps {
  conversations: Conversation[];
  currentConversation: Maybe<Conversation>;
  setCurrentConversation: CurrentConversationSetter;
}

const Sidebar: React.FC<SidebarProps> = ({
  conversations,
  currentConversation,
  setCurrentConversation
}) => {
  return (
    <Layout>
      <SidebarHeading>Channels</SidebarHeading>
      {conversations.map(conversation => (
        <SidebarItem key={conversation.id}>
          <ConversationLink
            conversation={conversation}
            isCurrentConversation={currentConversation.id === conversation.id}
            onClick={() => {
              setCurrentConversation(conversation);
            }}
          />
        </SidebarItem>
      ))}
    </Layout>
  );
};
export default Sidebar;

const Layout = styled.ul`
  background: ${colors["column-background"]};
  color: ${colors["text-color"]};

  list-style-type: none;
  margin: 0;
  padding: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

const SidebarItem = styled.li`
  font-weight: 200;
  width: 100%;
`;

const SidebarHeading = styled.div`
  width: 100%;
  padding: 4px;
  padding-top: 8px;
`;

interface ConversationLinkProps {
  conversation: Conversation;
  isCurrentConversation: boolean;
  onClick: () => void;
}
const ConversationLink: React.FC<ConversationLinkProps> = ({
  conversation,
  isCurrentConversation,
  ...props
}) => {
  return (
    <ConversationLinkContainer isCurrentConversation={isCurrentConversation} {...props}>
      <Hash />
      <span>{resolveConversationName(conversation)}</span>
    </ConversationLinkContainer>
  );
};

const ConversationLinkContainer = styled.div<{ isCurrentConversation: boolean }>(
  props => css`
    cursor: pointer;
    user-select: none;
    background: ${props.isCurrentConversation ? colors["active-presence"] : "transparent"};
    :hover {
      background: ${!props.isCurrentConversation && colors["hover-item"]};
    }
    font-size: 20px;
    line-height: 28px;

    padding: 4px 8px;
  `
);

const Hash = () => {
  return (
    <FontAwesomeIcon
      icon="hashtag"
      size="xs"
      css={css`
        margin: 0 8px 0 0;
      `}
    />
  );
};
