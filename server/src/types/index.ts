import { Types } from 'mongoose';

export interface IClient {
  id: string;
  name: string;
  email: string;
  phone: string;
}
export interface IProject {
  id: string;
  name: string;
  description: string;
  status: 'todo' | 'doing' | 'done';
}
export interface TProject extends IProject {
  clientId: Types.ObjectId | string;
}
