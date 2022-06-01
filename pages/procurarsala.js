import { Fragment, useEffect, useState } from "react";
import MainNavigation from "../componentes/logo"
import { useRouter } from 'next/router'
export default function ProcurarSala() {
    const [todasAsSalas, setTodasAsSalas] = useState([])
    const router = useRouter()
    async function MostrarTodasAsSalas() {
        const resultado = await fetch(`/api/ObterTodasAsSalas`)
        const json = await resultado.json()
        setTodasAsSalas(json)
    }
    useEffect(() => {
        MostrarTodasAsSalas()
    }, [])

    async function entrarNaSala(_id) {
        router.push(`/saladeespera/${_id}`)
    }
    return (

        <Fragment>
            <MainNavigation />
            {    todasAsSalas.length !== 0 ?
                <div>
                    {todasAsSalas.map((e) =>
                        <div>
                            <h1 >{e.NomeDaSala}</h1>
                            <h3>Jogadores: 1/{e.NumeroDeJogadores}</h3>
                            <h3>Baralho: {e.Baralho}</h3>
                            <button onClick={() => entrarNaSala(e._id)}>Entrar</button>
                        </div>
                    )}</div>
                : <p className="NaoHaSalas">Nao ha salas disponiveis</p>}
        </Fragment>
    )
}