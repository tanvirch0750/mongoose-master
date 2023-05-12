import { Model } from 'mongoose';

export interface IUser {
  id: string;
  role: 'student' | 'admin';
  password: string;
  name: {
    firstName: string;
    middleName?: string;
    lastName: string;
  };
  dateOfBirth?: string;
  gender: 'male' | 'female';
  email?: string;
  contactNo: string;
  emergencyContactNo: string;
  presentAddress: string;
  permanentAddress: string;
}

// instance methods
export interface IUserMethods {
  fullName(): string;
}

// static methods
export interface UserModel extends Model<IUser, {}, IUserMethods> {
  getAdminUsers(): IUser[];
}
