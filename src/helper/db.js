import mongoose from "mongoose";

export const connectDb = async () => {
    try {
        if (mongoose.connection.readyState >= 1) {
            console.log("Already connected to DB");
            return;
        }
        const connection = await mongoose.connect(process.env.MONGO_DB_URI, {
            dbName: "Workmanager",
        });

        console.log("DB connected successfully");
        console.log("Host:", connection.connection.host);
    } catch (error) {
        console.error("DB connection failed:", error);
    }
};
