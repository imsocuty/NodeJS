let express = require('express');
let router = express.Router();
import UsersService from "../services/users";

router.post('/', async (req, res, next) => {
    const result = await UsersService.getUsers(req.body);
    if (result) {
        res.render('index',{
            title:result
        })
    } else {
        res.send('로그인 실패')
    }
});

router.get('/', async (req, res, next) => {
    res.render('login')
})

module.exports = router;
