import { Publication } from "../entities/Publication";
import { Repository } from "./Repository";

export class FakePublicaitonsRepository implements Repository<Publication> {
    public getAll(): Publication[] {
        return [
            new Publication("Good publication", "05.05.1995" , "Thomas Shelby"),
            new Publication("Bad publication", "06.06.1996" , "Arthur Shelby"),
            new Publication("Super publication", "07.07.1997" , "John Shelby")
        ];
    }
}