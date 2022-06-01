import { Fragment, useEffect, useState } from "react";
import MainNavigation from "../../componentes/logo"
export default function SalaDeEspera({ id }) {
    const [dadosParaSalaDeEspera, setDadosParaSalaDeEspera] = useState({})
    const [jogadorAtual, setJogadorAtual] = useState("")
    const [jaEntrou, setJaEntrou] = useState(false)

    useEffect(() => {
        setJogadorAtual(sessionStorage.getItem("playerName") ?? "")
        fetchData()
    }, [])

    useEffect(() => {
        if (dadosParaSalaDeEspera.jogadores?.some(j => j === jogadorAtual)) {
            setJaEntrou(true)
        }
    }, [dadosParaSalaDeEspera])

    async function join() {
        const res = await fetch(`/api/sala/${id}/entrar/${jogadorAtual}`)
        console.log(res.status)
        if (res.status === 200) {
            localStorage.setItem("playerName", jogadorAtual)
            await fetchData()
            setJaEntrou(true)
        }
    }

    async function fetchData() {
        const resultado = await fetch(`/api/sala/${id}`)
        const json = await resultado.json()
        setDadosParaSalaDeEspera(json)
    }

    // useEffect(() => {
    //    const id = setInterval(() => {
    //         fetchData()
    //     }, 1000);

    //     return () => {
    //         clearInterval(id)
    //     }
    // })

    const handleStartGame = async () => {
        const resultado = await fetch(`/api/sala/comecar/${id}`)
        const json = await resultado.json()
        setDadosParaSalaDeEspera(json)
        //pega no nome que inserimos (sala.name) e envia num fetch
        // fetch("/sala/comecar", {
        //     de alguma maneira, e preciso enviar o nome e o id da sala
        // })
    }
    return (
        <Fragment>
            <MainNavigation />
            {
                jaEntrou
                    ? (
                        <div >
                            <h1>Nome da sala: {dadosParaSalaDeEspera.NomeDaSala}</h1>
                            <h3>
                                Nome: {dadosParaSalaDeEspera.NomeDoJogador}
                            </h3>
                            <h3 >Numero de jogadores 1/{dadosParaSalaDeEspera.NumeroDeJogadores}</h3>
                            <h3>Baralho: {dadosParaSalaDeEspera.Baralho}</h3>
                            <h3>Tempo por Ronda: {dadosParaSalaDeEspera.TempoPorRonda}</h3>
                            <h3>Numero de rondas: {dadosParaSalaDeEspera.NumeroDeRondas}</h3>
                            <h3>Link: http://localhost:3000/saladeespera/{id}</h3>
                            <button onClick={() => handleStartGame()}>Jogar</button>
                        </div>
                    ) : (
                        <div>
                            <input value={jogadorAtual} onChange={e => setJogadorAtual(e.target.value)}></input>
                            <button onClick={join}>Entrar Na Sala</button>
                        </div>
                    )
            }
        </Fragment>
    )
}
export async function getServerSideProps(context) {
    return {
        props: { id: context.query.id }, // will be passed to the page component as props
    }
}