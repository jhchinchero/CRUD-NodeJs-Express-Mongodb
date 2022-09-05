import mongoose from 'mongoose';

const connect_mongodb = async ()=>{
    try {
        const cnx = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB conectado en el Host: ${cnx.connection.host} Port: ${cnx.connection.port}`)
    } catch (error) {
        console.log("*******************************************************")
        console.log("********* Error al conectarse al MongoDB  *************")
        console.log("*******************************************************")
        console.log(error)
    }
}
export default connect_mongodb;