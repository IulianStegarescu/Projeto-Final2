import '../styles/globals.css'
import React,{useState} from "react"

function MyApp({ Component, pageProps }) {
  const [nomeSala,setNomeSala] = useState("")
  const [baralho,setBaralho] = useState("")
  const [nomeInput, setNomeInput] = useState("")
  return <Component  
  nomeSala ={nomeSala}
  setNomeSala={setNomeSala} 
  baralho ={baralho} 
  setBaralho={setBaralho} 
  nomeInput={nomeInput}
  setNomeInput={setNomeInput}
  {...pageProps} />
}

export default MyApp
