import { Fragment } from "react"
import MainNavigation from "../componentes/logo"
export default function Regras() {
    return (
        <Fragment>
             <MainNavigation/>
        <div className="Regras" >
        <div className="regrasH1"> <h1>Regras</h1></div>

           <div className="regrasP"> <p>
                One randomly chosen player begins as the Card Czar and plays a Black Card. <br />
       The Card Czar reads the question or fill-in-the-blank phrase on the Black Card out loud.<br />
       Everyone else answers the question or fills in the blank by passing one White Card, face down, to the Card Czar.<br />
       The Card Czar shuffles all of the answers and shares each card combination with the group.<br />
       For full effect, the Card Czar should usually re-read the Black Card before presenting each answer.
       </p>
        </div>
        </div>
        </Fragment>
    )
}
