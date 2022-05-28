import Link from "next/link"
import { Fragment, useState } from "react"
import MainNavigation from "../componentes/mainPage"
export default function Home({nomeInput,setNomeInput}) {
  return (
    <Fragment >
<MainNavigation/>
      <div>
        <div className="nomeDoJogador">
          <h3>Insira um Nome:</h3>
        </div>
        <div className="input">
          <input value={nomeInput} type="text" onChange={(evento) => setNomeInput(evento.target.value)} />
        </div><br/>
        <div className="organizarButoes">
          <Link href="/criarsala">
            <button className="butoes">Criar Sala</button>
          </Link>
          <Link href="/procurarsala">
            <button className="butoes">Procurar Sala</button>
          </Link>
          <Link href="/regras">
            <button className="butoes">Regras</button>
          </Link>
          <Link href="/baralhos">
            <button className="butoes">Baralhos</button>
          </Link>
        </div>
      </div>
    </Fragment>

  )
}