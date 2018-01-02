var express = require('express');

export default(app)=> {
app.get("/list/transactions",function(request, response, next) {
    new getAllTransactions(request,resonse,next).handle;
    res.render("listTransactions",{});
});
}
