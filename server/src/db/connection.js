import MongoClient from "mongodb";

const url = "mongodb://localhost:27017";
const dbname = 'tms';

export default class dbConnection{
    constructor(){

}
        writeData(data,collection){
            return new Promise((resolve,reject) => {
                MongoClient.connect(url, (err, db) => {
                if (err) throw err;
               db.collection(collection).insertOne(data, (err, res) => {
                    if (err) throw err;
                    console.log("1 document inserted");
                    db.close();
                });
            });
        });
    }

        readData(data,collection){
            return new Promise((resolve,reject) => {
                MongoClient.connect(url, (err, client) => {
                if (err) throw err;
                let  db = client.db(dbname);
                db.collection(collection).find({data}).toArray((err, result) => {
                    if (err) throw err;
                    client.close();
                    resolve(result);

                });
            });

        });
        }

        updateData(){

        }


    }
