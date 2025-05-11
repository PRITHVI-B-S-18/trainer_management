import express from "express" // Backend
import cors from "cors" // Cross Orgin Resourse Sharing - allows cross domain requests
import dotenv from "dotenv" // To use env var
import mongoose from "mongoose" // JS library used to connect mongodb and node.js
import userRouter from "./routes/user.js"
import http from "http" //To create a server instatnce
import { Server } from "socket.io"

const app = express(); //This function creates a application
app.use(express.json({ limit: '30mb' }));
app.use(express.urlencoded(({ limit: '30mb', extended: true })));
app.use(cors());
dotenv.config();

app.get('/', (req, res) => {
    res.send("This is the trainer management server");
});
app.use("/user", userRouter);

//Creating an HTTP server
const server = http.createServer(app);

//Initializing the socket.io server and attaching it to the http server
const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"]
    }
})

//Connection to mongodb
console.log(process.env.MONGODB_URL)
mongoose.connect(process.env.MONGODB_URL)
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.error("MongoDB connection error:", err.message);
    });
const PORT = process.env.PORT;

server.listen(PORT, () => {
    console.log(`Listening to the port number : ${PORT} `);
});