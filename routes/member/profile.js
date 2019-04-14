var express = require('express');
var router = express.Router();
var MsSql = require('mssql');

var sqlConfig = {
    user: process.env.DB_TALK_USER,                                                                              
    password: process.env.DB_TALK_PASSWORD,
    server: process.env.DB_HOST,
    port: process.env.SERVER_PORT,
    database: process.env.DB_TALK_NAME
};

router.post('/profileInfo_modified', function(req, res, next){
    // 정보수정. 수정하면 검사후 DB저장
});

router.post('/', function(req, res, next){
    // 처음 화면. profile.ejs를 보여줌. DB에서 정보가져온뒤 보여줌.
    res.render('member/profile');
});

module.exports = router;