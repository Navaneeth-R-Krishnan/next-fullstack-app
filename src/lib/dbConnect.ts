import mongoose from 'mongoose'

type ConnectionObject = {
    isConnected?:number
}

const connection: ConnectionObject ={}

async function dbConnect():Promise<void>{ 
    if(connection.isConnected){
        console.log("DB is already connected");
        return
    }
    try {
        const db = await mongoose.connect(process.env.MONGOURI || " ",{});

        connection.isConnected= db.connections[0].readyState
    }
    catch(e){
        console.log("DB is not connected, process is exiting");
        process.exit(1)
        
    }

}
export default dbConnect
