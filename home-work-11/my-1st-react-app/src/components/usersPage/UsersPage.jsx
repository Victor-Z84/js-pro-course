import React from "react";
import { UsersPageCard } from "./card/UsersPageCard";

import "./UsersPage.scss";

// const users = [
//     {
//       "login": "mojombo",
//       "id": 1,
//       "node_id": "MDQ6VXNlcjE=",
//       "avatar_url": "https://avatars.githubusercontent.com/u/1?v=4",
//       "gravatar_id": "",
//       "url": "https://api.github.com/users/mojombo",
//       "html_url": "https://github.com/mojombo",
//       "followers_url": "https://api.github.com/users/mojombo/followers",
//       "following_url": "https://api.github.com/users/mojombo/following{/other_user}",
//       "gists_url": "https://api.github.com/users/mojombo/gists{/gist_id}",
//       "starred_url": "https://api.github.com/users/mojombo/starred{/owner}{/repo}",
//       "subscriptions_url": "https://api.github.com/users/mojombo/subscriptions",
//       "organizations_url": "https://api.github.com/users/mojombo/orgs",
//       "repos_url": "https://api.github.com/users/mojombo/repos",
//       "events_url": "https://api.github.com/users/mojombo/events{/privacy}",
//       "received_events_url": "https://api.github.com/users/mojombo/received_events",
//       "type": "User",
//       "site_admin": false
//     },
//     {
//       "login": "defunkt",
//       "id": 2,
//       "node_id": "MDQ6VXNlcjI=",
//       "avatar_url": "https://avatars.githubusercontent.com/u/2?v=4",
//       "gravatar_id": "",
//       "url": "https://api.github.com/users/defunkt",
//       "html_url": "https://github.com/defunkt",
//       "followers_url": "https://api.github.com/users/defunkt/followers",
//       "following_url": "https://api.github.com/users/defunkt/following{/other_user}",
//       "gists_url": "https://api.github.com/users/defunkt/gists{/gist_id}",
//       "starred_url": "https://api.github.com/users/defunkt/starred{/owner}{/repo}",
//       "subscriptions_url": "https://api.github.com/users/defunkt/subscriptions",
//       "organizations_url": "https://api.github.com/users/defunkt/orgs",
//       "repos_url": "https://api.github.com/users/defunkt/repos",
//       "events_url": "https://api.github.com/users/defunkt/events{/privacy}",
//       "received_events_url": "https://api.github.com/users/defunkt/received_events",
//       "type": "User",
//       "site_admin": false
//     },
// ]

const getUsers = () => {
    return fetch('https://api.github.com/users')
            .then((response) => {
                if (!response.ok) throw response;
                return response.json();
            });
}



export class UsersPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
            isLoading: true,
            isError: false,
        }
    }

    componentDidMount() {
        getUsers()
        .then((data) => {
            this.setState({ users: data, isLoading: false });
        })
        .catch((e) => {
            this.setState({ isLoading: false, isError: true });
        })
    }

    render() {

        if (this.state.isLoading) {
            return (
                <div>
                    Loading...
                </div>
            )
        }

        if (this.state.isError) {
            return (
                <div>
                    Error :-(
                </div>
            )
        }

        return (
            <div className="users-page">
                {this.state.users.map(user => 
                    <UsersPageCard key={user.id} user={user}/>
                )}
            </div>
        )
    }
}