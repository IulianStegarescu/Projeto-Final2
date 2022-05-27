import Link from "next/link";
import { Fragment } from "react";

export default function SalaDeEspera() {
    return (
        <Fragment>
            <div >
                <h1>Sala Do Marcelo</h1>
                <h3 >2/7 Jogadores</h3>
                <div>
                    <p>
                        Armando<br />
                    Zé
                </p>
                </div>
                <h3>Baralho: Music</h3>
                <Link href="/jogo">
                    <button>Jogar</button>
                </Link>
            </div>
        </Fragment>
    )
}
