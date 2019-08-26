export class Profile {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  email: string;
  zip: string;

  constructor(
    firstName: string,
    lastName: string,
    username: string,
    password: string,
    email: string,
    zip: string
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.username = username;
    this.password = password;
    this.email = email;
    this.zip = zip;
  }
}