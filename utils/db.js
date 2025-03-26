import mysql from 'mysql2/promise';

const connectDB = async () => {
    try {
        const con = await mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "",
            database: "employeems"
        });
        console.log("✅ Database Connected Successfully");
        return con;
    } catch (err) {
        console.error("❌ Database connection failed:", err);
        setTimeout(connectDB, 5000); // Retry connection on failure
    }
};

export default connectDB; // ✅ Now it's a default export
