import React, {useState} from 'react';
import {IChat} from "../../models";

interface Props {
    selectedChat?: IChat;
    onSendMsg: (id: number, msg: string) => void;
}
export const ChatRoomFooter = (props: Props) => {
    const {selectedChat, onSendMsg} = props;

    const onClickSendMsg = () => {
        selectedChat?.id && onSendMsg(selectedChat?.id, msg);
        setMsg('');
    };

    const [msg, setMsg] = useState('');
    console.log(132)
    return (
        <div className="chat-room__footer">
            <input
                type="text"
                defaultValue={msg}
                className="input-field"
                placeholder="Write Message ..."
                autoFocus={true}
                onChange={event => setMsg(event.target.value)}
            />
            <div className="send-btn" onClick={onClickSendMsg}>
                <svg viewBox="0 0 24 24">
                    <path fill="#3b86c6" d="M2,21L23,12L2,3V10L17,12L2,14V21Z"/>
                </svg>
            </div>
        </div>
    );
};