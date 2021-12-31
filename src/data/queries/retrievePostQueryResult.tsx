
import { QueryObserverResult } from "react-query"
import { RetrieveHashtagResponseWrapper } from "../responses/hashtags/retrieveHashtagResponse"
import { RetrievePostResponseWrapper } from "../responses/posts/retrievePostResponse"

export type RetrievePostQueryResult = QueryObserverResult<RetrievePostResponseWrapper | undefined, unknown>
export type RetrieveHashtagQueryResult = QueryObserverResult<RetrieveHashtagResponseWrapper | undefined, unknown>
