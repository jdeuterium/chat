import React, {useState} from 'react';
import {orderBy} from "natural-orderby";
import {ChatList, ChatRoom, Modal, UserInfo} from "./components";
import {IChat, IUser} from "./models";
import {getUser} from './utils';
import './App.css';

function App() {
    const users: IUser[] = [
        {
            "id": 1,
            "name": "Illiana Sweeney"
        },
        {
            "id": 2,
            "name": "Ursula Manning"
        },
        {
            "id": 3,
            "name": "Talon Richard"
        },
        {
            "id": 4,
            "name": "Christian Talley"
        },
        {
            "id": 5,
            "name": "Reed Hobbs"
        },
        {
            "id": 6,
            "name": "Zephania Wong"
        },
        {
            "id": 7,
            "name": "Aaron Drake"
        },
        {
            "id": 8,
            "name": "Akeem Estrada"
        },
        {
            "id": 9,
            "name": "Sharon Holman"
        },
        {
            "id": 10,
            "name": "Quinn Lynch"
        }
    ];
    const initialChats: IChat[] = orderBy([
        {
            id: 1,
            userId: 1,
            updated_at: new Date(2021, 6, 22, 12, 24),
            history: [
                {
                    id: 1,
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                    time: new Date(2021, 6, 22, 12, 23),
                    type: 'incoming'
                },
                {
                    id: 2,
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                    time: new Date(2021, 6, 22, 12, 24),
                    type: 'outcoming'
                },
            ]
        },
        {
            id: 2,
            userId: 3,
            updated_at: new Date(2021, 6, 22, 12, 25),
            history: [
                {
                    id: 1,
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                    time: new Date(2021, 6, 22, 12, 23),
                    type: 'incoming'
                },
                {
                    id: 2,
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                    time: new Date(2021, 6, 22, 12, 25),
                    type: 'outcoming'
                },
            ]
        }
    ], ['updated_at'], ['desc']);
    const [chats, setChats] = useState(initialChats);

    const [viewModal, setViewModal] = useState(false);
    const [selectedChat, setSelectedChat] = useState<IChat | undefined>(chats[0]);
    const onSelectUser = (id: number | null) => {
        const chat = chats.find(chat => chat.userId === id);

        if (chat) {
            setSelectedChat(chat);
        } else if (id) {
            const newChat: IChat = {
                id: chats.length + 1,
                userId: id,
                updated_at: new Date(),
                history: []
            };
            setChats([newChat, ...chats]);
            setSelectedChat(newChat);
        }
    }
    const onSelectChat = (id: number) => setSelectedChat(chats.find(chat => chat.id === id));
    const onSendMsg = (chatId: number, msg: string) => {
        let chat = chats.find(chat => chat.id === chatId);
        const chatIndex = chats.findIndex(chat => chat.id === chatId);

        if (chatIndex !== -1 && chat) {
            chats.splice(chatIndex, 1);

            const updateChat = {
                ...chat,
                updated_at: new Date(),
                history: [{
                    id: chat.history.length + 1,
                    text: msg,
                    type: 'outcoming',
                    time: new Date()
                }, ...chat.history]
            };
            // @ts-ignore
            setChats([updateChat, ...chats]);
        }
    };

    return (
        <div className="chat-container">
            <div className="chat-left-side">
                <ChatList
                    chats={orderBy(chats, ['updated_at'], ['desc'])}
                    users={users}
                    setViewModal={setViewModal}
                    onSelectChat={onSelectChat}
                    selectedChat={selectedChat}
                />
            </div>
            <div className="chat-right-side">
                <ChatRoom selectedChat={selectedChat} onSendMsg={onSendMsg}/>
                <UserInfo user={selectedChat ? getUser(selectedChat.userId, users) : undefined}/>
            </div>
            {viewModal
                ? <Modal
                    users={users}
                    setViewModal={setViewModal}
                    onSelectUser={onSelectUser}/>
                : null}
        </div>
    );
}

export default App;
