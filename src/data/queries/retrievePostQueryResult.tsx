
import { QueryObserverResult } from "react-query"
import { RetrievePostResponse } from "../responses/posts/retrievePostResponse"

export type RetrievePostQueryResult = QueryObserverResult<RetrievePostResponse | undefined, unknown>

