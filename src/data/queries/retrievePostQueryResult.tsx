
import { QueryObserverResult } from "react-query"
import { RetrieveHashtagResponseWrapper } from "../responses/hashtags/retrieveHashtagResponse"
import { RetrievePostDetailsResponseWrapper } from "../responses/posts/retrievePostDetailsResponse"
import { RetrievePostResponseWrapper } from "../responses/posts/retrievePostResponse"

export type RetrievePostDetailsQueryResult
    = QueryObserverResult<RetrievePostDetailsResponseWrapper | undefined, unknown>
export type RetrievePostQueryResult
    = QueryObserverResult<RetrievePostResponseWrapper | undefined, unknown>
export type RetrieveHashtagQueryResult
    = QueryObserverResult<RetrieveHashtagResponseWrapper | undefined, unknown>
