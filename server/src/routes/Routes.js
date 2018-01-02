import home from "./home";
import addTrasaction from "./addTrasaction";
import insertTransaction from "./insertTrasaction";
import listTransactions from "./listTransactions"
import getTransactions from "./getTransactions"

export default function(app) {
home(app);
addTrasaction(app);
insertTransaction(app);
listTransactions(app);
getTransactions(app);
}