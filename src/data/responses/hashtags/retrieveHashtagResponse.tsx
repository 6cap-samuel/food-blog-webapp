import { Hashtag } from "../../../entities/hashtag";

export interface RetrieveHashtagResponseWrapper{
    data: RetrieveHashtagResponse
}

export interface RetrieveHashtagResponse {
    code: number,
    status: string,
    data: Hashtag[]
}

