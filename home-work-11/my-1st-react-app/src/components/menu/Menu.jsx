
import { NavLink } from "react-router-dom";
import { withTranslator } from "../../hoc/withTranslator";
import "./Menu.scss"

const links = [
    // {
    //     textId: "menu.links.clicker",
    //     url: "/clicker"
    // },
    {
        textId: "menu.links.home",
        url: "/"
    },
    {
        textId: "menu.links.users",
        url: "/users"
    },
    {
        textId: "menu.links.clickersBlock",
        url: "/clickersBlock"
    },
]

function Menu ({ translate }) {

    return (
        <div className="menu text">
            <ul>
                {links.map((link, index) => (
                    <li key={index}>
                        <NavLink to={link.url}>{translate(link.textId)}</NavLink>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default withTranslator(Menu);