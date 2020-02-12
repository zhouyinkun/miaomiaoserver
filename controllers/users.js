//引入邮箱配置
var {Email} = require('../untils/config.js');
var UserModel = require('../models/users.js');

var login = async (req,res,next)=>{

};

var register = async (req,res,next)=>{
    
    var { username , password , email , verify } = req.body;
	if( email !== req.session.email || verify !== req.session.verify ){
		res.send({
			msg : '验证码错误',
			status : -1
		});
		return;
	}
	
	var result = await UserModel.save({
		username,
		password,
		email
	});
	
	res.send(email)

	if(result){
		res.send({
			msg : '注册成功',
			status : 0
		});
	}
	else{
		res.send({
			msg : '注册失败',
			status : -2
		});
	}



};

var verify = async (req,res,next)=>{

    var email = req.query.email;
    //把验证码持久化
    var verify = Email.verify;

	req.session.verify = verify;
	req.session.email = email;

    var mailOptions =  {
        from: '喵喵网 935548472@qq.com', // 发送人的地址
        to: email, // 发送给谁
        subject: '喵喵网邮箱验证码', // 邮箱标题
        text: '验证码：'+Email.verify, // plain text body
	};
    Email.transporter.sendMail(mailOptions,(err)=>{
		if(err){
			res.send({
				msg : '验证码发送失败',
				status : -1,
			});
		}
		else{
			res.send({
				msg : '验证码发送成功',
				status : 0
			});
		}

	});

};

var loginout = async (req,res,next)=>{

};

var getUser = async (req,res,next)=>{

};

var findPassword = async (req,res,next)=>{

};

module.exports = {
    login,
    register,
    verify,
    loginout,
    getUser,
    findPassword
}