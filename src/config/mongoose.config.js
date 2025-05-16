import { connect } from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const MONGODB_URL = process.env.MONGODB_URL


export const DatabaseConfig = async () => {

    try {
 
        const connection = await connect(MONGODB_URL);

        const db = connection.connection;

        const {name,host,port} = db;

        console.log(`Database Connected \nDatabase Name = ${name} \nHost Name = ${host} \nDatabase Port =${port}`);

        
    } catch (error) {
        
       console.error(error);
       process.emit(1);

    }

}