import { ObjectId } from "bson";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import MainNavigation from "../../componentes/logo"
export default function SalaDeEspera({ sala, id }) {
    const [dadosParaSalaDeEspera, setDadosParaSalaDeEspera] = useState("")

    async function fetchData() {
        const resultado = await fetch(`/api/sala/${id}`)
        const json = await resultado.json()
        setDadosParaSalaDeEspera(json)
    }

    useEffect(() => {
       const id = setInterval(() => {
            fetchData()
        }, 1000);

        return () => {
            clearInterval(id)
        }
    })

    const handleStartGame = () => {
        //pega no nome que inserimos (sala.name) e envia num fetch
        // fetch("/sala/comecar", {
        //     de alguma maneira, e preciso enviar o nome e o id da sala
        // })
    }

    useEffect(() => {

    })


    useEffect(() => {
        //introduzir o nome (sala.nomedojogador) na "sala" na base de dados (fetch)
        // websocket.send ("entrei numa sala com o id ${id}")

        fetchData()
        //conectar ao servidor web socket
        //adicionar listeners de mensagens do servidor

        // ws.on("message", (e) => {
        //aqui logica dependendo das mensagens diferentes que o servidor pode enviar

        //se a mensagem for "atualiza"
        //fetchData()
        // })

    }, [])


    return (
        <Fragment>
            <MainNavigation />
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
        </Fragment>
    )
}
export async function getServerSideProps(context) {
    return {
        props: { id: context.query.id }, // will be passed to the page component as props
    }
}