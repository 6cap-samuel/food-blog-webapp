
import { QueryObserverResult } from "react-query"
import { RetrievePostResponseWrapper } from "../responses/posts/retrievePostResponse"

export type RetrievePostQueryResult = QueryObserverResult<RetrievePostResponseWrapper | undefined, unknown>

