export type UserType = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  phone: string;
  verified: boolean;
};

export interface UserState {
  user: UserType | null;
  isLoggedIn: Boolean;
}
