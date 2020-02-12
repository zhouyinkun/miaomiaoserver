//配置数据库
var mongoose = require('mongoose');
//配置邮箱
var nodemailer =require('nodemailer');

var Mongoose = {
    url : 'mongodb://localhost:27017/miaomiao',
    connect(){
        mongoose.connect(this.url,{useNewUrlParser:true},err=>{
            if(err){
                console.log('数据库连接失败');
                return;
            }
            console.log('数据库连接成功');
            
        })
    }
};

var Email = {
    config : {
        host: "smtp.qq.com",
        port: 587,
        auth: {
            user: '935548472@qq.com', // 发件人
            pass: 'wkmwafptaywqbbgi' // 邮箱授权秘钥
        }
    },
    get transporter(){//直接获得对象
        return nodemailer.createTransport(this.config);
    },
    get verify(){//生成验证码
        //转化成字母，且只要2-6位
        return Math.random().toString().substring(2,6);
    }
};
module.exports = {
    Mongoose,
    Email
};
