export default function Home2() {
    return (
        <div >
            <div>
                <h1 >Sala do João </h1>
                <h3>Jogadores: 2/7</h3>
                <h3>Baralho: Music</h3>
                <button>Entrar</button>
            </div>

            <div>
                <h1 >Sala do Luis</h1>
                <h3>Jogadores: 3/7</h3>
                <h3>Baralho: Names</h3>
                <button>Entrar</button>
            </div>
            <div>
                <h1 >Sala do David </h1>
                <h3>Jogadores: 7/7</h3>
                <h3>Baralho: Night Life</h3>
                <button disabled={true}>Sala Cheia</button>

            </div>
        </div>
    )
}
