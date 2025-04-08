import { faker } from '@faker-js/faker';
import bcrypt from 'bcrypt';



const generateProduct = () => {
    return {
        id: faker.database.mongodbObjectId(),
        title: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        price: faker.commerce.price(100, 1000, 0),
        stock: faker.number.int({ min: 1, max: 100 }),
        category: faker.commerce.department(),
    }
}

export const generateUser = () => {
    const nrandom = faker.number.int({ min: 1, max: 10 });
    const products = [];

    for (let i = 0; i < nrandom; i++) {
        products.push(generateProduct());
    }

    const password = 'coder123';
    const hashedPassword = bcrypt.hashSync(password, 10);
    return {
        id: faker.database.mongodbObjectId(),
        first_name: faker.person.firstName(),
        last_name: faker.person.lastName(),
        email: faker.internet.email(),
        sex: faker.helpers.arrayElement(['M', 'F']),
        age: faker.number.int({ min: 18, max: 99 }),
        password: faker.internet.password(),
        role: faker.helpers.arrayElement(['user', 'admin']),
        products,
        password: hashedPassword,
    }
}

