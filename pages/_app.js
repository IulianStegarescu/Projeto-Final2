import '../styles/globals.css'
import React, { useState } from "react"

function MyApp({ Component, pageProps }) {
  const [sala,setSala] = useState({
    NomeDoJogador:"",
    NomeDaSala:"",
    Baralho:"Classic",
    TempoPorRonda:"15 Segundos",
    NumeroDeJogadores:"2",
    NumeroDeRondas:"10"
  })
  return <Component
    sala={sala}
    setSala={setSala}
    {...pageProps} />
}

export default MyApp
