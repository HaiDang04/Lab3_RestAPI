const mongoose = require('mongoose');
const Scheme = mongoose.Schema;

const Users = new Scheme(
  {
    username: { type: String, unique: true, maxLength: 255 },
    password: { type: String, maxLength: 255 },
    email: { type: String, unique: true },
    name: { type: String },
    avatar: { type: String },
    available: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("user", Users);
/**
 * mongoose.model('user',Users)
 * đặt tên collection,đặt ở dạng số ít
 * thư viện mongoose sẽ tự động tạo ra tên collection
 * số nhiều (user=>users)
 */
/**
 * Type:String,Boolean =>Kiểu dữ liệu
 * unique:true => Không được trùng
 * maxLength:255 => Tối đa ký tự được nhập
 * default:false => Giá trị mặc định là false
 * timestamps => Tạo ra 2 trường createAt và updateAt
 */