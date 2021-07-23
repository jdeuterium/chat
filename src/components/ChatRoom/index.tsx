import React, {useState} from 'react';
import {IChat} from "../../models";
import './style.css';
import {ChatRoomFooter} from "./ChatRoomFooter";
import {orderBy} from "natural-orderby";

interface Props {
    selectedChat?: IChat;
    onSendMsg: (id: number, msg: string) => void;
}
export const ChatRoom = (props: Props) => {
    const {selectedChat, onSendMsg} = props;

    const history = orderBy(selectedChat ? selectedChat.history : [], ['time'], ['asc']);

    return (
        <div className="chat-room">
            <div className="chat-room__messages">
                {history.map(msg => <div key={msg.id} className="incoming-msg">
                    <div className={`message ${msg.type === 'incoming' ? 'message_in' : 'message_out'}`}>{msg.text}</div>
                </div>)}
            </div>
            <ChatRoomFooter onSendMsg={onSendMsg} selectedChat={selectedChat}/>
        </div>
    );
};