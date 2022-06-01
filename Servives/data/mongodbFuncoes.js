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
  const result = await collection.findOne({ _id: ObjectId(id) })
  return result
}

export async function AtualizarSala(sala) {
  const collection = await getMongoCollection("ProjetoFinal", "Salas")
  const result = await collection.updateOne({ _id: sala._id }, { $set: sala })
  return result
}

export async function ObterTodasAsSalas() {
  const collection = await getMongoCollection("ProjetoFinal", "Salas")
  const result = await collection.find().toArray()
  return result
}