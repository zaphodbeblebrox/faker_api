const ApiController = require("../controllers/ApiController")


module.exports = (app) => {
    // req is shorthand for request
    // res is shorthand for response
    app.get("/api", ApiController.api);
    
    app.get("/api/greet", ApiController.greeting);

}
