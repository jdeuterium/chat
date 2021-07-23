import React from 'react';
import {Dialog} from "./Dialog";
import './style.css';
import {IChat, IUser} from "../../models";
import {getUser} from "../../utils";

interface Props {
    chats: IChat[];
    users: IUser[];
    setViewModal: (value: boolean) => void;
    onSelectChat: (id: number) => void;
    selectedChat: IChat | undefined;
}
export const ChatList = (props: Props) => {
    const {chats, users, setViewModal, onSelectChat, selectedChat} = props;

    const onClickAddChat = () => setViewModal(true);

    return (
        <div className="chat-list">
            <div className="chat-list__top">
                <div className="add-chat-btn" onClick={onClickAddChat}>
                    <svg viewBox="0 0 24 24">
                        <path fill="#309d3b"
                              d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M13,7H11V11H7V13H11V17H13V13H17V11H13V7Z"/>
                    </svg>
                </div>
            </div>
            <div className="chat-list__body">
                {chats.map(_ => <Dialog
                    key={_.id}
                    data={_}
                    user={getUser(_.userId, users)}
                    onSelectChat={onSelectChat}
                    selectedChat={selectedChat}
                />)}
            </div>
        </div>
    );
};