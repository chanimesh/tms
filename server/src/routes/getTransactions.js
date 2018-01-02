var express = require('express');
import getTransactions from '../transactions/getTransactions';

export default(app)=> {
app.get("/get/transactions",function(request, response, next) {
    new getTransactions(request,response,next).handle();
});
}
