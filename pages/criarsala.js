import Link from "next/link"
import { Fragment, useState } from "react"
import MainNavigation from "../componentes/mainPage"
export default function Criarsala({nomeSala,setNomeSala, baralho,setBaralho}) {
    const [view, setView] = useState(0)

       const handleSelect=(e)=>{
          setBaralho(e)
       }
    
    return (
        
        <Fragment>
            <MainNavigation/>
            <div >
                {view === 0 ?
                    <div>
                        <h1 >Criar Sala</h1>
                        <h3>Escolhe o nome da sala:</h3>
                        <input value={nomeSala} type="text" onChange={(evento) => setNomeSala(evento.target.value)} />
                        <button onClick={() => { setView((prev) => prev + 1) }} disabled={nomeSala == ""}>Seguinte</button>
                    </div>
                    : null}
                {view === 1
                    ? <div>
                        <h1 >Criar Sala</h1>
                        <h1>Nome da sala: {nomeSala}</h1>
                        <h3>Escolhe o baralho</h3>
                        <select className="dropdown" id="deks" name="deks" onSelect={handleSelect()}>
                            <option value="Diversos"  >Diversos</option>
                            <option value="Emojis" >Emojis </option>
                        </select>
                        


                        <button onClick={() => { setView((prev) => prev - 1), setNomeSala("") } }>Anterior</button>
                        <button onClick={() => { setView((prev) => prev + 1) }} disabled={nomeSala == ""}>Seguinte</button>


                    </div>
                    : null}

                {view === 2 ?
                    <div>
                        <h1 >Criar Sala</h1>
                        <h1>Nome da sala: {nomeSala}</h1>
                        <h3>Escolhe o tempo de cada ronda</h3>
                        <select className="dropdown" id="tempoPorRonda" name="tempoPorRonda">
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
                        <h1>Nome da sala: {nomeSala}</h1>
                        <h3>Escolhe o número de jogadores</h3>
                        <select className="dropdown" id="numeroDeJogadores" name="numeroDeJogadores">
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
                        <h1>Nome da sala: {nomeSala}</h1>
                        <h3>Escolhe o número máximo de rondas</h3>
                        <select className="dropdown" id="maxDeRondas" name="maxDeRondas">
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