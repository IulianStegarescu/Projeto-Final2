import {ObterSala} from "../../../Servives/data/mongodbFuncoes"
export default async function (req, res) {
    if (req.method === "GET") {
     const result = await ObterSala(req.query.id)
    res.status(202).json(result)
    }

}