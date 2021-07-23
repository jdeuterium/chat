export default interface IMessage {
    id: number;
    text: string;
    time: Date;
    type: 'incoming' | 'outcoming';
}