import React from 'react';
import {IUser} from "../../models";
import './style.css';

interface Props {
    user?: IUser;
}
export const UserInfo = (props: Props) => {
    const {user} = props;

    return (
        <div className="user-info">
            <div className="user-block">
                <div className="user-info__avatar">
                    <img src={`../../../avatar/${user?.id}.png`} alt=""/>
                </div>
                <div className="user-info__name">{user?.name}</div>
            </div>
            <div className="user-info__actions">
                <div className="action-btn">
                    <svg viewBox="0 0 24 24">
                        <path fill="#309d3b"
                              d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z"/>
                    </svg>
                </div>
                <div className="action-btn">
                    <svg viewBox="0 0 24 24">
                        <path fill="#3b86c6"
                              d="M17,10.5V7A1,1 0 0,0 16,6H4A1,1 0 0,0 3,7V17A1,1 0 0,0 4,18H16A1,1 0 0,0 17,17V13.5L21,17.5V6.5L17,10.5Z"/>
                    </svg>
                </div>
                <div className="action-btn">
                    <svg viewBox="0 0 24 24">
                        <path fill="#ce1c1c"
                              d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"/>
                    </svg>
                </div>
            </div>
        </div>
    );
};