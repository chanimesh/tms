var express = require('express');


export default(app)=> {
app.get("/add/transaction",function(req, res, next) {
    res.render("addTrasaction",{});
});
}
