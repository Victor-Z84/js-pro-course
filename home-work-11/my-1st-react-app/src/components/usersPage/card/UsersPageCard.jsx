import React, { useState } from "react";
import { withTranslator } from "../../../hoc/withTranslator";
import { UsersPageModal } from "../modal/UsersPageModal";

import "./UsersPageCard.scss";

export function Card ({ user }) {

    // объявляем новую переменную состояния "showModal" и используем хук useState
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <div className="users-page-card" onClick={() => setShowModal(true)}>
                <img className="avatar" src={user.avatar_url} alt="Avatar"/>
                <span className="name">
                    {user.login}
                </span>   
            </div>

            {showModal && <UsersPageModal user={user} onClose={() => setShowModal(false)}/>}
        </>
    );
}

export const UsersPageCard = withTranslator(Card);
