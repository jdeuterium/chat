import {IUser} from "./models";

export const getUser = (id: number, users: IUser[]) => (users.find(user => user.id === id) || {id: null, name: ''});