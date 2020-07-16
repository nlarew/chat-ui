import { Message } from "../types";
import users from "./users";

const joe = users.find(u => u.name === "Joe Jasper");
const claire = users.find(u => u.name === "Claire Michaels");
const bella = users.find(u => u.name === "Bella Menendez");

const messages: Message[] = [
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
];
export default messages;
