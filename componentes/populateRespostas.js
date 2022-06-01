import  getMongoCollection  from "../mongo"

 async function populate_Baralho_Respostas() {
     const collection = await getMongoCollection("Baralho_Respostas")
     collection.insertMany(
         
     )
 }
 export default populate_Baralho_Respostas