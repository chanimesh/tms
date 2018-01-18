import fetch from "isomorphic-fetch";

export default class listTransactions{
    constructor(request,response,next){
        this.transactionData=request.body.transactionData;
        this.response= response;

    }

     async handle(){
        let url = "http://localhost:3000/get/transactions";
        // let url = "//offline-news-api.herokuapp.com/stories";
        let transactionData =  await fetch(url).then(response => response.json())
            .then(data=>data)
            .catch(error => console.log(error));
         return  transactionData;

    }
}