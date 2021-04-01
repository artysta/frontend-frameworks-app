import { Post } from "../entities/Post";

export class PostRepository {
    private URL: string = "https://jsonplaceholder.typicode.com/posts";

    public async getAll(): Promise<Post[]> {
        let json = await (await fetch(this.URL)).json();

        let posts: Post[] = [];

        for (let p of json) {
            posts.push(this.parseToPost(p));
        }

        return posts;
    }

    public async getById(id: string): Promise<Post> {
        return this.parseToPost(await (await fetch(`${this.URL}/${id}`)).json());
    }

    private parseToPost(o: any): Post {
        return new Post(
            o.userId,
            o.id,
            o.title,
            o.body);
    }

}