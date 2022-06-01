import Link from "next/link"
import { Fragment, useState } from "react"
import MainNavigation from "../componentes/logo"
export default function Home({sala,setSala}) {
  return (
    <Fragment >
<MainNavigation/>
      <div className="paginit">
        <div className="nomeDoJogador">
          <h3>Insira o Nome:</h3>
        </div>
        <div className="input">
          <input value={sala.NomeDoJogador} type="text" onChange={(evento) => setSala(prev=>({...prev,NomeDoJogador:evento.target.value}))} />
        </div><br/>
        <div className="organizarButoes">
          <Link href="/criarsala">
            <button className="butoes" disabled={sala.NomeDoJogador == ""}>Criar Sala</button>
          </Link>
          <Link href="/procurarsala">
            <button className="butoes" disabled={sala.NomeDoJogador == ""}>Procurar Sala</button>
          </Link>
          <Link href="/regras">
            <button className="butoes" >Regras</button>
          </Link>
          <Link href="/baralhos">
            <button className="butoes" >Baralhos</button>
          </Link>
        </div>
      </div>
    </Fragment>

  )
}