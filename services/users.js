import Users from "../models/users";

export default class UsersService {
    static async getUsers(body) {
        const params = [body.userId, body.userPw]
        const result = await Users.getUsers(params);

        return result[0]?.id;
    }
}