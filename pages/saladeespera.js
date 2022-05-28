import Link from "next/link";
import { Fragment } from "react";
import MainNavigation from "../componentes/mainPage"
export default function SalaDeEspera({ nomeSala, setState, baralho, nomeInput }) {
    return (
        <Fragment>
             <MainNavigation/>
            <div >
                <h1>Nome da sala: {nomeSala}</h1>
                <h3 >1/7 Jogadores</h3>
                <div>
                    <p>
                        {nomeInput}
                    </p>
                </div>
                <h3>Baralho: {baralho}</h3>
                <Link href="/jogo">
                    <button>Jogar</button>
                </Link>
            </div>
        </Fragment>
    )
}
