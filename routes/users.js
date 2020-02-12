var express = require('express');
var usersContoller = require('../controllers/users.js')
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login',usersContoller.login);//登录
router.post('/register',usersContoller.register);//注册
router.get('/verify',usersContoller.verify);//验证
router.get('/loginout',usersContoller.loginout);//退出
router.post('/getUser',usersContoller.getUser);
router.post('/findPassword',usersContoller.findPassword);//找回密码

module.exports = router;
