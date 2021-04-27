// User blueprint
export interface User {
    id: number,
    email: string,
    name: string,
    phone: string,
    username: string,
    website: string
}
// App state blueprint
export interface APP_STATE {
    users: User[],
    loading: boolean,
    error: Error
}
