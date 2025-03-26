import express from "express";
import cors from "cors";
import { adminRouter } from "./Routes/AdminRoute.js";
import { EmployeeRouter } from "./Routes/EmployeeRoute.js";
import cookieParser from "cookie-parser";
import  connectDB  from "./utils/db.js"; // ✅ Ensure this path is correct

const app = express();

// Connect to Database
(async () => {
    await connectDB();
})();

app.use(cors({
    origin: ["http://localhost:5173"],
    methods: ['GET', 'POST', 'PUT', "DELETE"],
    credentials: true
}));

app.use(express.json());
app.use(cookieParser());

app.use('/auth', adminRouter);
app.use('/employee', EmployeeRouter);
app.use(express.static('Public'));

app.listen(3001, () => {
    console.log("🚀 Server is running on port 3001");
});
