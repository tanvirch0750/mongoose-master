import { IUser } from './user.interface';
import User from './user.model';

export const createuserToDB = async (payload: IUser): Promise<IUser> => {
  const user = await new User(payload);
  await user.save();
  // user.fullName() --> custom instance method
  return user;
};

export const getUsersFromDB = async (): Promise<IUser[]> => {
  const users = await User.find();
  return users;
};

export const getUserByIdFromDB = async (
  payload: string
): Promise<IUser | null> => {
  // if we use mongoDB provided id then we can use findById method, we are accessing data with our provided id so we are using findOne method
  const user = await User.findOne({ id: payload });
  // if we want only specific fields
  const userSpecificFileds = await User.findOne(
    { id: payload },
    { name: 1, contactNo: 1 }
  );
  return userSpecificFileds;
};

export const getAdminUsersFromDB = async (): Promise<IUser[]> => {
  const admins = await User.getAdminUsers();
  return admins;
};
