export interface User {
    name: String,
    age: Number
}

export function createUser(req:Express.Request, res: Express.Response):Promise<User>
export function getAllUsers(req:Express.Request, res: Express.Response):Promise<User>
export function getById(req:Express.Request, res: Express.Response):Promise<User>
export function deleteUser(req:Express.Request, res: Express.Response):Promise<User>
export function updateUser(req:Express.Request, res: Express.Response):Promise<User>