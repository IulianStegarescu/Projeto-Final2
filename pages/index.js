import Link from "next/link"
import { Fragment, useState } from "react"
export default function Home() {
  const [nomeInput, setNomeInput] = useState("")
  return (
    <Fragment >
      <div>
        <h1>Cards Aganist Humanity</h1>
        <h3>Insira um Nome:</h3>
        <input value={nomeInput} type="text" onChange={(evento) => setNomeInput(evento.target.value)} />
        <Link href="/criarsala">
          <button>Criar Sala</button>
        </Link>
        <Link href="/procurarsala">
          <button>Procurar Sala</button>
        </Link>
        <Link href="/regras">
          <button>Regras</button>
        </Link>
        <Link href="/baralhos">
          <button>Baralhos</button>
        </Link>
      </div>
    </Fragment>

  )
}
