export type ConversationID = string;
export interface Conversation {
  id: ConversationID;
  participants: User[];
}

export interface Channel extends Conversation {
  name: string;
}

export interface DirectMessage extends Conversation {
  participants;
}

export type MessageID = string;
export interface Message {
  id: MessageID;
}

export type UserID = string;
export interface User {
  id: UserID;
}
