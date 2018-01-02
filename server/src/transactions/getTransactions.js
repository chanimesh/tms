import dbConnection from "../db/connection"

export default class getTransactions{
    constructor(request,response,next){
        this.transactionData=request.body.transactionData;
        this.response= response;

    }

    handle(){
        // console.log(this.transactionData);
        let collection="transactions";
        let dbconn = new dbConnection();
        dbconn.readData(this.transactionData,collection).then((dataResult) => {
               console.log(dataResult);
               this.response.json(dataResult);
        })
            .catch((error)=>{

            })

    }
}