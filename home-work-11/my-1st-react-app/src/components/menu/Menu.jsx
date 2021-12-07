import "./Menu.scss"

const links = [
    {
        text: "Messages",
        url: "/"
    },
    {
        text: "Friends",
        url: "/"
    },
    {
        text: "News",
        url: "/"
    },
    {
        text: "Groups",
        url: "/"
    },
    {
        text: "Video",
        url: "/"
    },
    {
        text: "Photos",
        url: "/"
    },
    {
        text: "Games",
        url: "/"
    },

]

function Menu () {
    return (
        <div className="menu">
            <ul>
                {links.map((link, index) => (
                    <li key={index}>
                        <a href={link.url}>{link.text}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Menu;