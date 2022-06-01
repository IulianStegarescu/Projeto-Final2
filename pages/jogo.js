import { Fragment } from "react";
import Sidebar from "../componentes/sidebar"
export default function Jogo() {

    //esta funcao tem que ser chamada a cada segundo
    async function fetchData1() {
        const resultado = await fetch(`/api/jogo/${id}`)
        //este endpoiint carrega tudo sobre o jogo
        const json = await resultado.json()

        //guarda no state
        setDadosParaSalaDeEspera(json)
    }
    useEffect(() => {
        const id = setInterval(() => {
             fetchData1()
         }, 1000);
 
         return () => {
             clearInterval(id)
         }
     })

    async function handlePlay() {
        //if sou um jogador
        fetch("/jogo/:id/jogar", {
            //neste pedido e preciso enviar, o id do jogo e a carta que escolhemos
        })

    }



    return (
        <Fragment>
            {/* <MainNavigation/> */}
            {
                player ?
                     <div className='container'>
                <Sidebar />
                <div className='areaDeJogo'>
                    <div className="perguntas"><h3>Perguntas</h3></div>
                    <div className='areaResposta'></div>
                    <div className="cartas">
                        <div className='carta' onClick={() => handlePlay()}>Respostas</div>
                        <div className='carta'>Respostas</div>
                        <div className='carta'>Respostas</div>
                        <div className='carta'>Respostas</div>
                        <div className='carta'>Respostas</div>
                    </div>
                    <div className='areaAcoes'>
                        <button>Jogar</button>
                    </div>
                </div>
            </div>:
            <div>
                //visao de juri
            </div>
           }


        </Fragment>
    )
}





{/* <div className="divjogo">
                <div className="cartas">
                    <h1>Quem é o melhor Formador?</h1>
                </div>
             
              <div className="divRespostas">
                   <div className="respostas" > <h1>Rafael</h1></div>
                    <div className="respostas"><h1>Luisa</h1></div>
                    <div className="respostas"><h1>Fernando</h1></div>
                    <div className="respostas"><h1>404 Not Found</h1></div>
                    <div className="respostas"><h1>404 Not Found</h1></div>
                    
                </div>
                <div className="pontuacao">
                    <h1  className="jogadores">Pontuacao</h1>
                    <h3  className="jogadores">Marcelo: -1 (juri) </h3>
                    <h3  className="jogadores">Carolina: 999</h3>
                    <h3  className="ronda">Ronda 4/10 </h3>
                    <div className="linhapontuacao"></div>
                </div>
            </div> */}