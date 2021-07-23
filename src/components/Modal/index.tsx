import React from 'react';
import {User} from "./User";
import {IUser} from "../../models";
import './style.css';

interface Props {
    users: IUser[];
    setViewModal: (value: boolean) => void;
    onSelectUser: (id: number | null) => void;
}
export const Modal = (props: Props) => {
    const {users, setViewModal, onSelectUser} = props;

    const onCloseModal = () => setViewModal(false);
    const onClickUser = (id: number | null) => {
        onSelectUser(id);
        setViewModal(false);
    }

    return (
        <div className="modal-backdrop">
            <div className="modal">
                <div className="modal__head">
                    <div className="modal__title">Choose contact</div>
                    <div className="modal__close" onClick={onCloseModal}>&times;</div>
                </div>
                <div className="modal__body">
                    {users.map(user => <User key={user.id} user={user} onSelectUser={onClickUser}/>)}
                </div>
            </div>
        </div>
    );
};