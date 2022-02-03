export interface CreatePostResponseWrapper {
    data: CreatePostResponse
}

export interface CreatePostResponse {
    code: number,
    status: string,
    data: string
}