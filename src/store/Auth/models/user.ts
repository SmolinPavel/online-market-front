export default interface User {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    type: string;
    status: string;
    last_login: string;
    created_at: string;
    is_authenticated?: boolean;
    is_anonymous?: boolean;
}