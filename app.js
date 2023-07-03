const express = require("express");
const faker = require("@faker-js/faker");

const app = express();
const port = 8000;

const createUser = () => {
    const newFake = {
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.phoneNumber(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        _id: faker.random.uuid()
    };
    return newFake;
};

const createCompany = () => {
    const newFake = {
        _id: faker.random.uuid(),
        name: faker.company.companyName(),
        address: {
            street: faker.address.streetName(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    };
    return newFake;
};

app.get("/api/users/new", (req, res) => {
    res.json({user: createUser});
});

app.get("/api/companies/new", (req, res) => {
    res.json({company: createCompany});
});

app.get("/api/user/company", (req, res) => {
    res.json({user:createUser, company:createCompany});
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