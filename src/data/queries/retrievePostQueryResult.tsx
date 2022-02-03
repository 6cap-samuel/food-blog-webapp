
import { QueryObserverResult, UseMutationResult } from "react-query"
import { RetrieveHashtagResponseWrapper } from "../responses/hashtags/retrieveHashtagResponse"
import { RetrievePostDetailsResponseWrapper } from "../responses/posts/retrievePostDetailsResponse"
import { RetrievePostResponseWrapper } from "../responses/posts/retrievePostResponse"
import { LoginResponseWrapper } from "../responses/auth/loginResponse"
import { TokenResponseWrapper } from '../responses/auth/tokenResponse';
import { CreatePostResponseWrapper } from '../responses/posts/createPostResponse';

export type RetrievePostDetailsQueryResult
    = QueryObserverResult<RetrievePostDetailsResponseWrapper | undefined, unknown>
export type RetrievePostQueryResult
    = QueryObserverResult<RetrievePostResponseWrapper | undefined, unknown>
export type RetrieveHashtagQueryResult
    = QueryObserverResult<RetrieveHashtagResponseWrapper | undefined, unknown>
export type RetrieveTokenQueryResult
    = QueryObserverResult<TokenResponseWrapper | undefined, unknown>

export type LoginMutationResult
    = UseMutationResult<LoginResponseWrapper | undefined, unknown, void, unknown>
export type CreatePostMutationResult
    = UseMutationResult<CreatePostResponseWrapper | undefined, unknown, void, unknown>