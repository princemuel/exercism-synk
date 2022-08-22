export interface IClient {
  id: string;
  name: string;
  email: string;
  phone: string;
}
export interface IProject {
  id: string;
  name: string;
  clientId: string;
  description: string;
  status: 'In Progress' | 'Done';
}
