import { Bike } from "./bike";
import { Rent } from "./rent";
import { User } from "./user";

export class App {
    users: User[] = []
    bikes: Bike[] = []
    rents: Rent[] = []

    findUser( email: string): User | undefined{
        return this.users.find(user =>{ return user.email === email})
    }

    addUser(user: User): void {
        if (this.users.some(rUser => { return rUser.email === user.email })) {
            throw new Error('User with same email already registered.')
        }
        this.users.push(user)
    }

    registraBike(bike: Bike): void{
        if (this.bikes.some(renBike => {return renBike.id === bike.id})){
            throw new Error('Bike com o mesmo ID foi registrada.')
        }
        this.bikes.push(bike)
    }

    rentBike(bike: Bike, user: User, startDate: Date, endDate: Date): Rent {
        const rentss = this.rents.filter((bikess) => bikess.bike === bike);
        const newRent = Rent.create(rentss, bike, user, startDate, endDate);
        this.rents.push(newRent);
        return newRent;
    }
    

    removeUser(user: User): void {
        this.users = this.users.filter(existingUser => existingUser !== user);
    }
    

    returnBike(id: string): Bike | undefined{
        return this.bikes.find(bike => {return bike.id === id})
    }

    listUsers(): User[]{
        var i=0
        var users = []

        for(i; i< this.users.length; i++){
            users[i]=this.users[i]
        }

        return users
    }

    listBikes(): Bike[]{
        var i=0
        var bikes = []

        for(i; i< this.bikes.length; i++){
            bikes[i]=this.bikes[i]
        }

        return bikes
    }

    listRents(): Rent[]{
        var i=0
        var rents = []

        for(i; i< this.rents.length; i++){
            rents[i]=this.rents[i]
        }

        return rents
    }

    autenticaUser(senha: string, email: string): void{
        const testUser = this.findUser(email)
        if(testUser?.password === senha){
            console.log('Login realizado')
        }else{
            console.log('Usúario ou senha incorreto!')
        }
    }
}