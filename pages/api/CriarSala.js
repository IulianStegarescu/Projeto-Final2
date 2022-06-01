import { AdicionarSala } from "../../Servives/data/mongodbFuncoes"
export default async function (req, res) {
    if (req.method === "POST") {
        // o nomeDoJogador para um array com o nome do jogador
        const result = await AdicionarSala({...req.body, jogadores: [req.body.NomeDoJogador]})
        res.status(202).json({ _id: result })
    }

}