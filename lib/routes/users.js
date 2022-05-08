"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
let express = require('express');
let router = express.Router();
const users_1 = __importDefault(require("../services/users"));
router.post('/', async (req, res, next) => {
    const result = await users_1.default.getUsers(req.body);
    if (result) {
        res.render('index', {
            title: result
        });
    }
    else {
        res.send('로그인 실패');
    }
});
router.get('/', async (req, res, next) => {
    res.render('login');
});
module.exports = router;
//# sourceMappingURL=users.js.map