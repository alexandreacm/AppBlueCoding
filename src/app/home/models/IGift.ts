import { User } from './user';
export interface IGift {
    type: string;
    id: string;
    username: string;
    title: string;
    user: User;
}
