import React, { useEffect, useState } from "react";
import { getUser } from "../../api/usersApi";
import { Modal } from "../../modal/Modal";

import "./UsersPageModal.scss";


export function UsersPageModal ({ user, onClose }) {
    // объявляем новые переменные состояний "data", "isLoading", "isError" и используем хук useState
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    // аналогично componentDidMount
    useEffect(() => {

        async function fetchData() {
            try {
                const response = await getUser(user.login);
                setData(response.data);
                setIsLoading(false);
            } catch {
                setIsLoading(false);
                setIsError(true);
            }
        };
        fetchData();
    }, []);


    return (
        <Modal title ={`${user.login} (${user.type})`}
                onClose={onClose}>

                <div className="users-page-modal">
                    <img className="avatar" src={user.avatar_url} alt="Avatar"/>
                    <a href={user.html_url} target="_blank">User profile</a>

                    {isLoading && <span>Loading...</span>}
                    {isError && <span>Error :-(</span>}
                    {!isLoading && !isError &&
                        <div className="info">
                            <p>
                                Name: {data.name}
                            </p>
                            {data.location && 
                                <p>
                                    Location: {data.location}
                                </p>
                            }
                        </div> 
                    }
                </div>
        </Modal>
    )
}