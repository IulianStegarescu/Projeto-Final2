import {ObterTodasAsSalas} from "../../Servives/data/mongodbFuncoes"
export default async function (req, res) {
    if (req.method === "GET") {
     const result = await ObterTodasAsSalas()
    res.status(202).json(result)
    console.log(result)
    }
}