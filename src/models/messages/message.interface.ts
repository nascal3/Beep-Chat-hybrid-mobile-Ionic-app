import { User  } from '../user/use.interfacer';

export  interface Message {
  user: User;
  date: Date;
  lastMessage: string;
}
