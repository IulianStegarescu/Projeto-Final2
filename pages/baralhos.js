import { Fragment } from "react";
import MainNavigation from "../componentes/logo"
export default function Baralhos() {
    return (
        <Fragment>
            <MainNavigation />
            <div className="baralhos"><h1>Decks</h1></div>
            <div className="todosOsBaralhos">
                <div className="verbaralhos"><h3>Classic</h3></div>
                <div className="verbaralhos"><h3>Emojis</h3></div>
            </div>
        </Fragment>
    )
}