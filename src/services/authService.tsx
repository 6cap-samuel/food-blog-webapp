import { get, post } from "../utils/axios"
import { LoginRequest } from '../data/requests/loginRequest';
import { LOGIN_URL, TOKEN_URL } from "../utils/constants";
import { LoginResponse } from "../data/responses/auth/loginResponse";
import { EmptyRequest } from '../data/requests/emptyRequest';
import { EmptyResponse } from '../data/responses/emptyResponse';

export const login = (
    username: string,
    password: string,
) => {
    return post<LoginRequest, LoginResponse>(
        LOGIN_URL,
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
        TOKEN_URL,
        {},
        {
            token
        }
    )
}