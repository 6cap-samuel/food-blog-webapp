import { Post } from "../../../entities/post";

export interface RetrievePostResponseWrapper {
    data: RetrievePostResponse
}

export interface RetrievePostResponse {
    code: number,
    status: string,
    data: Post[]
}