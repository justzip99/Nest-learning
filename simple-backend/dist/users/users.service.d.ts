export declare class UsersService {
    private users;
    getUsers(gender?: 'male' | 'female'): {
        id: number;
        name: string;
        gender: string;
        age: number;
    }[];
}
