var sqlControl = require("./controlSql")
var ctrl = new sqlControl("localhost", "root", "sesamo", "mybd");
ctrl.test();