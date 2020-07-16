export type Maybe<T> = T | null | undefined;

export type ConversationID = string;
export type ConversationType = "channel" | "group";

export interface Conversation {
  id: ConversationID;
  type: ConversationType;
  name?: string;
  participants: User[];
  messages: Message[];
}

export interface Channel extends Conversation {
  type: "channel";
  isPrivate: boolean;
  name: string;
}

export interface Group extends Conversation {
  type: "group";
}

export type MessageID = string;
export interface Message {
  id: MessageID;
  text: string;
  sentAt: Date;
  sentBy: User;
}

export type UserID = string;
export interface User {
  id: UserID;
  name: string;
}
