import MongoClient from "mongodb";

var url = "mongodb://localhost:27017/tms";

export default class dbConnection{
    constructor(){

}
        writeData(data,collection){
        // let data=data;
        // let collection=collection;
            MongoClient.connect(url, (err, db) => {
                if (err) throw err;
                db.collection(collection).insertOne(data, (err, res) => {
                    if (err) throw err;
                    console.log("1 document inserted");
                    db.close();
                });
            });

        }
        readData(data,collection){
            return new Promise((resolve,reject) => {
            MongoClient.connect(url, (err, db) => {
                if (err) throw err;
                db.collection(collection).find({data}).toArray((err, result) => {
                    if (err) throw err;
                    db.close();
                    console.log(result);
                    resolve(result);

                });
            });

        });
        }
        updateData(){

        }


    }
