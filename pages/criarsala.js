import { Fragment, useState } from "react"
import MainNavigation from "../componentes/logo"
import { useRouter } from 'next/router'

export default function Criarsala({ sala, setSala }) {
    const [view, setView] = useState(0)
    const router = useRouter()

    async function criarSala() {
        const resultado = await fetch("/api/CriarSala", {
            method: "POST",
            body: JSON.stringify(sala),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const json = await resultado.json()
        //se criout sala
        router.push(`/saladeespera/${json._id}`)

    }
    return (

        <Fragment>
            <MainNavigation />
            <div >
                {view === 0 ?
                    <div>
                        <h1 className="criarSala">Criar Sala</h1>
                        <h3>Escolhe o nome da sala:</h3>
                        <input value={sala.NomeDaSala} type="text" onChange={(evento) =>
                            setSala(s => ({ ...s, NomeDaSala: evento.target.value }))} />
                        <button onClick={() => { setView((prev) => prev + 1) }} disabled={sala.NomeDaSala == ""}>Seguinte</button>
                            <div className="barra">
                            <div className="barra2"></div>    
                            </div>
                    </div>
                    
                    : null}
                {view === 1
                    ? <div>
                        <h1 className="criarSala" >Criar Sala</h1>
                        <h1>Nome da sala: {sala.NomeDaSala}</h1>
                        <h3>Escolhe o baralho</h3>
                        <select className="dropdown" value={sala.Baralho} onChange={(e) => {
                            setSala(s => ({ ...s, Baralho: e.target.value }))

                        }}>
                            <option value="Classic" >Classic</option>
                            <option value="Emojis" >Emojis </option>

                        </select>
                        <button onClick={() => { setView((prev) => prev - 1), setSala(s => ({ ...s, NomeDaSala: "" })) }}>Anterior</button>
                        <button onClick={() => { setView((prev) => prev + 1) }} >Seguinte</button>


                    </div>
                    : null}

                {view === 2 ?
                    <div>
                        <h1 className="criarSala">Criar Sala</h1>
                        <h1>Nome da sala: {sala.NomeDaSala}</h1>
                        <h3>Escolhe o tempo de cada ronda</h3>
                        <select className="dropdown" value={sala.TempoPorRonda} onChange={(e) =>
                            setSala(s => ({ ...s, TempoPorRonda: e.target.value }))}>
                            <option value={15}>15 segundos</option>
                            <option value="25 segundos">25 segundos</option>
                            <option value="35 segundos">35 segundos</option>
                        </select>
                        <button onClick={() => { setView((prev) => prev - 1) }}>Anterior</button>
                        <button onClick={() => { setView((prev) => prev + 1) }}>Seguinte</button>
                    </div>
                    : null}

                {view === 3 ?
                    <div>
                        <h1 className="criarSala">Criar Sala</h1>
                        <h1>Nome da sala: {sala.NomeDaSala}</h1>
                        <h3>Escolhe o número de jogadores</h3>
                        <select className="dropdown" value={sala.NumeroDeJogadores} onChange={(e) =>
                            setSala(s => ({ ...s, NumeroDeJogadores: e.target.value }))}>
                            <option value="2">2 jogadores</option>
                            <option value="3">3 jogadores</option>
                            <option value="4">4 jogadores</option>
                            <option value="5">5 jogadores</option>
                            <option value="6">6 jogadores</option>
                            <option value="7">7 jogadores</option>
                        </select>
                        <button onClick={() => { setView((prev) => prev - 1) }}>Anterior</button>
                        <button onClick={() => { setView((prev) => prev + 1) }}>Seguinte</button>
                    </div>
                    : null}
                {view === 4 ?
                    <div>
                        <h1 className="criarSala">Criar Sala</h1>
                        <h1>Nome da sala: {sala.NomeDaSala}</h1>
                        <h3>Escolhe o número máximo de rondas</h3>
                        <select className="dropdown" value={sala.NumeroDeRondas} onChange={(e) =>
                            setSala(s => ({ ...s, NumeroDeRondas: e.target.value }))}>
                            <option value="10">10 Rondas</option>
                            <option value="15">15 Rondas</option>
                            <option value="20">20 Rondas</option>
                        </select>

                        <button onClick={() => { setView((prev) => prev - 1) }}>Anterior</button>
                        <button onClick={() => criarSala()}>Criar Sala</button>
                    </div>
                    : null}
            </div>
        </Fragment>
    )
}