var nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:"dangbhhph33065@fpt.edu.vn",//Email được gửi đi
        pass:"phpv kclr zfas qqag"//Mật khẩu email gửi
    }
})

module.exports = transporter