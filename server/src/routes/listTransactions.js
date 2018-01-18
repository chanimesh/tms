var express = require('express');
import listTransactions from "../transactions/listTransactions"

export  default(app)=> {
app.get("/list/transactions", (request, response, next)  => {
    let transactionsList = new listTransactions(request,response,next);
    transactionsList.handle().then(
        data=>{
            //console.log(data);
            response.render("listTransactions",{data: JSON.stringify(data)});

        }
    );
    // console.log(data);
});
}

