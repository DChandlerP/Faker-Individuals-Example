const faker = require("faker");
const fs = require("fs");

let individuals = {content: []};

for (let i = 0; i < 30; i++) {

    let individual = {
        pid: "p" + faker.random.number({min:100000, max:999999}),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        description: faker.lorem.paragraph(),
        startDate: faker.date.past().toISOString(),
        endDate: faker.date.future(5).toISOString(),
        address: {
            line1: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zip: faker.address.zipCode(),
        }
    };
    individuals.content.push(individual);
}

fs.writeFile("individuals.json", JSON.stringify(individuals, null, 2), () => {});