import { User } from "../entities/User";

export class UserRepository {
    private URL: string = "https://jsonplaceholder.typicode.com/users";

    public async getAll(): Promise<User[]> {
        let json = await (await fetch(this.URL)).json();

        let users: User[] = [];

        for (let u of json) {
            users.push(this.parseToUser(u));
        }

        return users;
    }

    public async getById(id: string): Promise<User> {
        return this.parseToUser(await (await fetch(`${this.URL}/${id}`)).json());
    }

    private parseToUser(o: any): User {
        return new User(
            o.id,
            o.name,
            o.username,
            o.email,
            o.phone,
            o.website,
            o.company.name,
            o.address.city);
    }

}