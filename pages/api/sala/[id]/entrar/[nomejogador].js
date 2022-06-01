import { AtualizarSala, ObterSala } from "../../../../../Servives/data/mongodbFuncoes"
export default async function (req, res) {
    if (req.method === "GET") {
        const result = await ObterSala(req.query.id)
        const jogador = req.query.nomejogador

        if (!result.jogadores.some(j => j === jogador)) {
            result.jogadores.push(jogador)
            await AtualizarSala(result)
            return res.status(200).json({ message: "ok" })
        }


        console.log(jogador)
        res.status(404).json({ message: "nok" })
    }

}