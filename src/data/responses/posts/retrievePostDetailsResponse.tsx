import { Post } from "../../../entities/post";

export interface RetrievePostDetailsResponseWrapper{
    data: RetrievePostDetailsResponse
}

export interface RetrievePostDetailsResponse {
    code: number,
    status: string,
    data: Post
}
