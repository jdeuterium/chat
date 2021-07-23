import IMessage from "./Message";

export default interface IChat {
    id: number;
    userId: number;
    updated_at: Date;
    history: IMessage[]
}