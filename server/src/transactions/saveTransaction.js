import dbConnection from "../db/connection"

export default class saveTransaction{
    constructor(request,response,next){
        this.transactionData=request.body.transactionData;
        this.response= response;

    }

    handle(){
        console.log(this.transactionData);
        let collection="transactions";
        new dbConnection().writeData(this.transactionData,collection);
        this.response.send("hello   njasdf");
    }
}