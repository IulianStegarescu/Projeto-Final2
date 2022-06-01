import  getMongoCollection  from "../../projetofinal0.1/Servives/data/mongodb"

 async function populate_Baralho_Perguntas() {
     const collection = await getMongoCollection("Baralho_Perguntas")
     collection.insertMany(["Aa","as"].map(e => ({content:e,baralho:"classic"}))
         
     )
 }
 export default populate_Baralho_Perguntas