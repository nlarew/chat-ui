import { useState } from "react";
import { Conversation, Maybe } from "../types";

export type CurrentConversationSetter = (conversation: Conversation) => void;
export type CurrentConversationPayload = [Maybe<Conversation>, CurrentConversationSetter];

const useCurrentConversation = (initial: Maybe<Conversation>): CurrentConversationPayload => {
  const [current, setCurrent] = useState<Maybe<Conversation>>(initial);
  // const setCurrentConversation: CurrentConversationSetter = ({ id }) => {
  //   setCurrent(id);
  // };
  return [current, setCurrent];
};
export default useCurrentConversation;

// export type CurrentConversationSetter = ({ id: ConversationID }) => void;
// export type CurrentConversationPayload = [Maybe<ConversationID>, CurrentConversationSetter];

// const useCurrentConversation = (initial: Maybe<ConversationID>): CurrentConversationPayload => {
//   const [current, setCurrent] = useState<Maybe<ConversationID>>(initial);
//   const setCurrentConversation: CurrentConversationSetter = ({ id }) => {
//     setCurrent(id);
//   };
//   return [current, setCurrentConversation];
// };
// export default useCurrentConversation;
