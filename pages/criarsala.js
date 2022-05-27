import Link from "next/link"
import { Fragment, useState } from "react"

export default function Home2() {
    const [nomeSala, setNomeSala] = useState("")
    const [baralho, setBaralho] = useState("")
    const [view, setView] = useState(0)
    return (
        <Fragment>
            <div >
                {view === 0 ?
                    <div>
                        <h1 >Criar Sala</h1>
                        <h3>Escolhe o nome da sala:</h3>
                        <input value={nomeSala} type="text" onChange={(evento) => setNomeSala(evento.target.value)} />
                        <button onClick={() => { setView((prev) => prev + 1) }}>Seguinte</button>
                    </div>
                    : null}
                {view === 1
                    ? <div>
                        <h1 >Criar Sala</h1>
                        <h3>Escolhe o baralho</h3>
                        <select id="deks" name="deks" onSelect={() => setBaralho(value)}>
                            <option value="Music">Music</option>
                            <option value="Night Life">Night Life</option>
                            <option value="Names">Names</option>
                        </select>
                        <button onClick={() => { setView((prev) => prev - 1) }}>Anterior</button>
                        <button onClick={() => { setView((prev) => prev + 1) }}>Seguinte</button>


                    </div>
                    : null}

                {view === 2 ?
                    <div>
                        <h1 >Criar Sala</h1>
                        <h3>Escolhe o tempo de cada ronda</h3>
                        <select id="tempoPorRonda" name="tempoPorRonda">
                            <option value="15s">15 segundos</option>
                            <option value="25s">25 segundos</option>
                            <option value="35s">35 segundos</option>
                        </select>
                        <button onClick={() => { setView((prev) => prev - 1) }}>Anterior</button>
                        <button onClick={() => { setView((prev) => prev + 1) }}>Seguinte</button>
                    </div>
                    : null}

                {view === 3 ?
                    <div>
                        <h1 >Criar Sala</h1>
                        <h3>Escolhe o número de jogadores</h3>
                        <select id="numeroDeJogadores" name="numeroDeJogadores">
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
                        <h1 >Criar Sala</h1>
                        <h3>Escolhe o número máximo de rondas</h3>
                        <select id="maxDeRondas" name="maxDeRondas">
                            <option value="10">10 Rondas</option>
                            <option value="15">15 Rondas</option>
                            <option value="20">20 Rondas</option>
                        </select>
                        <button onClick={() => { setView((prev) => prev - 1) }}>Anterior</button>
                        <Link href="/saladeespera">
                            <button>Seguinte</button>
                        </Link>
                    </div>
                    : null}
            </div>
        </Fragment>
    )
}
