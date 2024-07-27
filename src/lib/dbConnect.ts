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
        await mongoose.connect()
    }
}