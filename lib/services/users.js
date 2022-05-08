"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const users_1 = __importDefault(require("../models/users"));
class UsersService {
    static async getUsers(body) {
        var _a;
        const params = [body.userId, body.userPw];
        const result = await users_1.default.getUsers(params);
        return (_a = result[0]) === null || _a === void 0 ? void 0 : _a.id;
    }
}
exports.default = UsersService;
//# sourceMappingURL=users.js.map