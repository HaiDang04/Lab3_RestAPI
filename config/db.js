const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

// Đối với database dùng compass
const local = "mongodb://127.0.0.1:27017/Database";

// Đối với databasee dùng atlas(cloud)
const atlas = "mongodb+srv://user1:admin@cluster0.mknqvl1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connect = async () => {
    try {
        await mongoose.connect(local);
        console.log("Connect Success");
    } catch (error) {
        console.error("Connection Error:", error);
        console.log("Connect Fail");
    }
}



module.exports = { connect };