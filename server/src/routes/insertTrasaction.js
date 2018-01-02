import saveTransaction from '../transactions/saveTransaction'


export default(app)=> {
    app.post("/insert/transaction",(request, response, next) =>  {
        new saveTransaction(request,response, next).handle();
    });
}
