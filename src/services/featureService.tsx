import { EmptyRequest } from "../data/requests/emptyRequest"

export const retrieveAllHashtags = () => {
    return get<EmptyRequest, RetrieveHashtagResponse>(
        HASHTAG_URL
    )
}


export const retrieveAllFeatures = () => {
    return get<EmptyRequest,>
}

