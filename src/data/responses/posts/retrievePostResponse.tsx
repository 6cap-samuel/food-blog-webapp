import { Post } from "../../../entities/post";

export interface RetrievePostResponse {
    code: number,
    status: string,
    data: Post[]
}

