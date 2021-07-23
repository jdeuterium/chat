import React from 'react';
import {IChat, IUser} from "../../models";
import './style.css';

interface Props {
    data: IChat;
    user: IUser;
    onSelectChat: (id: number) => void;
    selectedChat: IChat | undefined;
}
export const Dialog = (props: Props) => {
    const {data, user, onSelectChat, selectedChat} = props;
    const msgCount = data.history.length;
    const lastMsg = msgCount ? data.history[msgCount - 1] : {text: '', time: null};

    const onClickDialog = () => onSelectChat(data.id);

    return (
        <div className={`dialog ${selectedChat && data.id === selectedChat.id ? 'dialog_active' : ''}`} onClick={onClickDialog}>
            <div className="dialog__user-avatar">
                <img src={`../../../avatar/${user.id}.png`} alt=""/>
            </div>
            <div className="dialog__text">
                <div className="dialog__username">{user.name}</div>
                <div className="dialog__last">
                    <div className="dialog__last-msg">{lastMsg.text}</div>
                    <div className="dialog__last-time">{lastMsg.time
                        ? `${lastMsg.time?.getHours()}:${lastMsg.time?.getMinutes()}`
                        : null}</div>
                </div>
            </div>
        </div>
    );
};