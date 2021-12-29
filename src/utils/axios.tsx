import axios from 'axios';

export async function get<Request, Response>(
    url: string,
    requestData?: Request,
    headers?: any
) {
    return await axios.get<Response>(
        url,
        {
            data: requestData,
            headers: headers
        }
    )
}

export async function post<Request, Response>(
    url: string,
    requestBody?: Request,
    headers?: any
) {
    return await axios.post<Response>(
        url,
        requestBody,
        {
            headers: headers
        }
    )
}