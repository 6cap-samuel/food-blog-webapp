
import { AxiosResponse } from "axios"
import { QueryObserverResult, UseMutationResult } from "react-query"
import { RetrieveHashtagResponseWrapper } from "../responses/hashtags/retrieveHashtagResponse"
import { RetrievePostDetailsResponseWrapper } from "../responses/posts/retrievePostDetailsResponse"
import { RetrievePostResponseWrapper } from "../responses/posts/retrievePostResponse"
import { EmptyResponse } from '../responses/emptyResponse';

export type RetrievePostDetailsQueryResult
    = QueryObserverResult<RetrievePostDetailsResponseWrapper | undefined, unknown>
export type RetrievePostQueryResult
    = QueryObserverResult<RetrievePostResponseWrapper | undefined, unknown>
export type RetrieveHashtagQueryResult
    = QueryObserverResult<RetrieveHashtagResponseWrapper | undefined, unknown>

export type LoginMutationResult
    = UseMutationResult<AxiosResponse<EmptyResponse> | undefined, unknown, void, unknown>
