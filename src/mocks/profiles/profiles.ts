import { Profile } from "../../models/profile/profile.interfacer"

 export const userList: Profile[] = [
  {
    firstName: 'Paul',
    lastName: 'Whatever',
    email: 'test@test.com',
    avatar: 'assets/img/avatar.png',
    dateOfBirth: new Date()
  },
  {
    firstName: 'John',
    lastName: 'Mantis',
    email: 'johnt@gmail.com',
    avatar: 'assets/img/avatar2.png',
     dateOfBirth: new Date()
  },
  {
    firstName: 'Jane',
    lastName: 'Doe',
    email: 'jane@gmail.com',
    avatar: 'assets/img/avatar3.png',
    dateOfBirth: new Date()
  },
  {
    firstName: 'Sean',
    lastName: 'Paul',
    email: 'paul@gmail.com',
    avatar: 'assets/img/avatar4.png',
    dateOfBirth: new Date()
  }
];

