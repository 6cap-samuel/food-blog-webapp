import { get, post } from "../utils/axios"
import { LoginRequest } from '../data/requests/loginRequest';
import { AUTH_TOKEN_URL, AUTH_URL } from "../utils/constants";
import { LoginResponse } from "../data/responses/auth/loginResponse";
import { EmptyRequest } from '../data/requests/emptyRequest';
import { EmptyResponse } from '../data/responses/emptyResponse';

export const login = (
    username: string,
    password: string,
) => {
    return post<LoginRequest, LoginResponse>(
        AUTH_URL,
        {
            username,
            password
        }
    )
}

export const tokenCheck = (
    token: string
) => {
    return get<EmptyRequest, EmptyResponse>(
        AUTH_TOKEN_URL,
        {},
        {
            token
        }
    )
}