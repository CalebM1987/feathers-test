export interface BaseUser {
  email: string;
}

export interface NewUser extends BaseUser {
  password: string;
}

export interface User extends BaseUser {
  _id?: string;
  profilePicture?: string;
  googleId?: string;
  facebookId?: string;
  githubId?: string;
}