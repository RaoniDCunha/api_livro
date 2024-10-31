import mongoose from 'mongoose'

mongoose.connect(${ENV.database.credencials})

let db = mongoose.connection;

export default db;
