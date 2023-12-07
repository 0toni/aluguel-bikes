import { App } from "./app";
import { Bike } from "./bike";
import { Rent } from "./rent";
import { User } from "./user";
import sinon, { SinonFakeTimers } from 'sinon';

async function main() {
    const clock: SinonFakeTimers = sinon.useFakeTimers();

    try {
        const app = new App();
        const user1 = new User('Jose', 'jose@mail.com', '1234');
        await app.registerUser(user1);

        const bike = new Bike('caloi mountainbike', 'mountain bike',
            1234, 1234, 100.0, 'My bike', 5, []);
        const bikeId = app.registerBike(bike);

        console.log('Bike disponível: ', bike.available);

        app.rentBike(bikeId, user1.email);
        console.log('Bike disponível: ', bike.available);

        clock.tick(65 * 60 * 1000);

        const rentalPrice = app.returnBike(bikeId, user1.email);
        console.log('Preço do aluguel: ', rentalPrice);
        console.log('Bike disponível: ', bike.available);
    } finally {
        clock.restore();
    }
}

main();
