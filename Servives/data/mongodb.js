//conect to mongo
import { MongoClient } from "mongodb"
const URL = process.env.MONGO_URL ?? "mongodb://localhost:27017"
const BASE_DE_DADOS = "ProjetoFinal"
const COLECAO = "Salas"
async function getMongoCollection() {
    const client = await connectToMongo()
    return client.db(BASE_DE_DADOS).collection(COLECAO)
  }


let client
async function connectToMongo() {
  try {
    if (!client) {
      client = await MongoClient.connect(URL)
    }
    return client;
  } catch (err) {
    console.log(err)
  }
}

export default getMongoCollection 