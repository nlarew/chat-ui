import { Conversation, Channel, Message, Group } from "../types";
import users from "./users";

const joe = users.find(u => u.name === "Joe Jasper");
const claire = users.find(u => u.name === "Claire Michaels");
const bella = users.find(u => u.name === "Bella Menendez");

const channelOne: Channel = {
  type: "channel",
  id: "channel_1",
  name: "channel-one",
  participants: [],
  messages: [],
  isPrivate: false
};

const channelTwo: Channel = {
  type: "channel",
  id: "channel_2",
  name: "channel-two",
  participants: [joe, claire, bella],
  messages: [
    {
      id: "1",
      text: "Hey!",
      sentAt: new Date("2019-10-01T10:24:00Z"),
      sentBy: joe
    },
    {
      id: "2",
      text: "Howdy",
      sentAt: new Date("2019-10-01T10:24:32Z"),
      sentBy: claire
    },
    {
      id: "3",
      text: "Nice to meet you :)",
      sentAt: new Date("2019-10-01T10:25:04Z"),
      sentBy: joe
    }
  ],
  isPrivate: false
};

const channelThree: Channel = {
  type: "channel",
  id: "channel_3",
  name: "channel-three",
  participants: [],
  messages: [],
  isPrivate: false
};

const groupOne: Group = {
  type: "group",
  id: "group_1",
  participants: [joe, claire, bella],
  messages: []
};

export default [channelOne, channelTwo, channelThree, groupOne] as Conversation[];
