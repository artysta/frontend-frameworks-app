import { Comment } from "../entities/Comment";

export class CommentRepository {
    private URL: string = "https://jsonplaceholder.typicode.com/comments";

    public async getAll(): Promise<Comment[]> {
        let json = await (await fetch(this.URL)).json();

        let comments: Comment[] = [];

        for (let c of json) {
            comments.push(this.parseToComment(c));
        }

        for (let c of comments) {
            console.log(`${c.postId} ${c.id} ${c.name} ${c.email} ${c.body}`);
        }

        return comments;
    }

    public async getById(id: string): Promise<Comment> {
        return this.parseToComment(await (await fetch(`${this.URL}/${id}`)).json());
    }

    private parseToComment(o: any): Comment {
        return new Comment(
            o.postId,
            o.id,
            o.name,
            o.email,
            o.body);
    }

}