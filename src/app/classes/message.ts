import { User } from './user';

export class Message {
    message: string;
    createAt: string;
    sender: User;

    constructor({message, createdAt, user}){
        this.message = message;
        this.createAt = createdAt;
        this.sender = new User(user);
    }
}
