const mongoose = require('mongoose');
const Scheme = mongoose.Schema;

const Fruits = new Scheme({
    name:{type:String},
    quantity:{type:Number},
    price:{type:Number},
    status :{type:Number},//status = 1 => Còn hàng, 0 => Hết hàng. -1 => Ngừng Kinh Doanh
    image:{type:Array},//Kiểu dữ liệu danh sách
    description:{type:String},
    id_distributor : {type:Scheme.Types.ObjectId,ref:'distributor'}
},{
    timestamps:true
})
module.exports = mongoose.model('fruit',Fruits)
/**
 * type:Scheme.Types.ObjectId=>Kiểu dữ liệu id của mongodb
 * ref:khóa ngoại
 */