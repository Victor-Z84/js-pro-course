
import { withTranslator } from "../../hoc/withTranslator";
import "./Menu.scss"

const links = [
    {
        textId: "menu.links.messages",
        url: "/"
    },
    {
        textId: "menu.links.friends",
        url: "/"
    },
    {
        textId: "menu.links.news",
        url: "/"
    },
    {
        textId: "menu.links.groups",
        url: "/"
    },
    {
        textId: "menu.links.video",
        url: "/"
    },
    {
        textId: "menu.links.photos",
        url: "/"
    },
    {
        textId: "menu.links.games",
        url: "/"
    },

]

function Menu ({ translate }) {

    return (
        <div className="menu">
            <ul>
                {links.map((link, index) => (
                    <li key={index}>
                        <a href={link.url}>{translate(link.textId)}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default withTranslator(Menu);