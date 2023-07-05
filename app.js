const express = require("express");
const {faker} = require("@faker-js/faker");

const app = express();
const port = 8000;

const createUser = () => {
    const newFake = {
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        _id: faker.string.numeric()
    };
    return newFake;
};

const createCompany = () => {
    const newFake = {
        _id: faker.string.numeric(),
        name: faker.company.name(),
        address: {
            street: faker.location.street(),
            city: faker.location.city(),
            state: faker.location.state(),
            zipCode: faker.location.zipCode(),
            country: faker.location.country()
        }
    };
    console.log(newFake);
    return newFake;
};

app.get("/api/users/new", (req, res) => {
    res.json({user: createUser()});
});

app.get("/api/companies/new", (req, res) => {
    res.json({company: createCompany()});
});

app.get("/api/user/company", (req, res) => {
    res.json({user:createUser(), company:createCompany()});
});
    
const apiRoutes = require("./routes/apiRoutes");
apiRoutes(app);

// req is shorthand for request
// res is shorthand for response
// app.get("/api", (req, res) => {
//     res.json({ message: "Hello World" });
// });

// this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );