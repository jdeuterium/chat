import React from 'react';
import {IUser} from "../../models";

interface Props {
    user: IUser;
    onSelectUser: (id: number | null) => void;
}
export const User = (props: Props) => {
    const {user, onSelectUser} = props;

    const onClickUser = () => onSelectUser(user.id)

    return (
        <div className="dialog" onClick={onClickUser}>
            <div className="dialog__user-avatar">
                <img src={`../../../avatar/${user.id}.png`} alt=""/>
            </div>
            <div className="dialog__text">
                <div className="dialog__username">{user.name}</div>
            </div>
        </div>
    );
};