const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://user_43yuarwmh:p43yuarwmh@bytexldb.com:5050/db_43yuarwmh', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB connected...");
    } catch (err) {
        console.error("DB Connection Failed:", err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
