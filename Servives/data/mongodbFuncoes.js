// findbarlahobyid
import getMongoCollection from "./mongodb"
import { ObjectId } from "mongodb"
export async function AdicionarSala(data) {
    const collection = await getMongoCollection("ProjetoFinal", "Salas")
    const result = await collection.insertOne(data)
    return result.insertedId
  }


export async function ObterSala(id) {
  const collection = await getMongoCollection("ProjetoFinal", "Salas")
  const result = await collection.findOne({_id: ObjectId(id)})
  return result
}