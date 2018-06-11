import axios, { AxiosInstance } from 'axios';
import { redirectToLogout } from './authHelper';

export const BASE_API_URL = `${process.env.REACT_APP_API_URL}`;

const axiosClient: AxiosInstance = axios.create({
    baseURL: BASE_API_URL
});

axiosClient.interceptors.response.use(
    function (response: any): any {
        if (response.status === 204) {
            return new Response(null, response);
        } else if ([403, 401].indexOf(response.status) >= 0) {
            redirectToLogout();
        }
        return new Response(JSON.stringify(response.data), response);
    },
    function (error: any): any {
        const response = error.response;
        if ([403, 401].indexOf(response.status) >= 0) {
            redirectToLogout();
        }
        return Promise.resolve(new Response(JSON.stringify(response.data), response));
    }
);

class ApiHelper {
    static post(
        url: string, body: {}, contentTypeParam?: string, isStringify: boolean = true
    ): Promise<Response> {
        const contentType = contentTypeParam || 'application/json';
        let finalBody;
        if (contentTypeParam && contentTypeParam === 'multipart/form-data') {
            finalBody = body;
        } else {
            finalBody = isStringify ? JSON.stringify(body) : body;
        }

        const headers = {
            'Content-Type': contentType,
            'X-CSRFToken': ApiHelper.getCsrfToken(),
        };

        return axiosClient.post(url, finalBody, { headers }) as any;
    }

    static put(
        url: string,
        body: {},
        contentTypeParam?: string,
        isStringify: boolean = true,
        onProgress?: (res: any) => any
    ): Promise<Response> {
        const contentType = contentTypeParam || 'application/json';
        const finalBody = isStringify ? JSON.stringify(body) : body;

        const headers = {
            'Content-Type': contentType,
            'X-CSRFToken': ApiHelper.getCsrfToken(),
        };

        return axiosClient.put(url, finalBody, {
            headers,
            onUploadProgress: onProgress
        }) as any;
    }

    static patch(url: string, body: {}, contentTypeParam?: string, isStringify: boolean = true): Promise<Response> {
        const contentType = contentTypeParam || 'application/json';
        const finalBody = isStringify ? JSON.stringify(body) : body;

        return axiosClient.patch(url, finalBody, {
            headers: {
                'Content-Type': contentType,
                'X-CSRFToken': ApiHelper.getCsrfToken(),
            }
        }) as any;
    }

    static get(url: string, config: object): Promise<Response> {
        return axiosClient.get(url, {
            ...config,
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': ApiHelper.getCsrfToken(),
            }
        }) as any;
    }

    static delete(url: string): Promise<Response> {
        return axiosClient.delete(url, {
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': ApiHelper.getCsrfToken(),
            }
        }) as any;
    }

    static async doRequest(url: string, type: string, ...rest: any[]): Promise<any> {
        try {
            const response = await ApiHelper[type](url, ...rest);

            let data = {};
            if (response.body !== null) {
                data = await response.json();
            }

            if (!response.ok) {
                return Promise.reject(ApiHelper.getErrors(data));
            }

            return Promise.resolve(data);
        } catch (error) {
            return Promise.reject([error.message]);
        }
    }

    static getErrors(data: any, defaultError: string = 'Undefined error') {
        const type = typeof data;
        switch (type) {
            case 'string':
                return [data];
            case 'object':
                if (data.hasOwnProperty('error')) {
                    return [data.error];
                } else if (data.hasOwnProperty('message')) {
                    return [data.message];
                } else if (data.hasOwnProperty('errors')) {
                    return data.errors;
                } else if (data.hasOwnProperty('detail')) {
                    return [data.detail];
                }

                return Object.keys(data).map(key => `${key}: ${data[key]}`);
            default:
                return defaultError;
        }
    }

    static getCsrfToken() {
        const name = `${process.env.REACT_APP_CSRF_COOKIE_NAME}`;
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                let cookie = cookies[i].trim();
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
}

export default ApiHelper;
