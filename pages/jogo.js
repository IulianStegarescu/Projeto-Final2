import Link from "next/link";
import { Fragment } from "react";
import MainNavigation from "../componentes/mainPage"
export default function Jogo() {
    return (
        <Fragment>
             <MainNavigation/>
            <div >
                <div className="cartas">
                    <h1>Quem é o melhor Formador?</h1>
                </div>
             
              <div className="divRespostas">
                   <div className="respostas" > <h1>Rafael</h1></div>
                    <div className="respostas"><h1>Luisa</h1></div>
                    <div className="respostas"><h1>Fernando</h1></div>
                    <div className="respostas"><h1>404 Not Found</h1></div>
                    <div className="respostas"><h1>404 Not Found</h1></div>
                    
                </div>
                <div className="pontuacao">
                    <h1  className="jogadores">Pontuacao</h1>
                    <h3  className="jogadores">Marcelo: -1 </h3>
                    <h3  className="jogadores">Carolina: 999</h3>
                    <h3  className="ronda">Ronda 4/10 </h3>
                    {/* <h3  className="ronda">Hiperligação:
                    http://
localhost:3000</h3> */}
                    <div className="linhapontuacao"></div>
                </div>
            </div>
        </Fragment>
    )
}
