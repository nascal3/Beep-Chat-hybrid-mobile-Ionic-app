import { Profile  } from '../profile/profile.interfacer';

export  interface Message {
  user: Profile;
  date: Date;
  lastMessage: string;
}
