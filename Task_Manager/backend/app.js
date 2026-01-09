const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT;
const cors = require('cors');
const cookieParser=require('cookie-parser')


app.use(
    cors({
        origin: "http://localhost:5173", 
        credentials: true
    })
);

app.use(express.json());
app.use(cookieParser())

const main = require('./config/config')

main().then(() => console.log("Connect to Db"))
.catch((err) => console.log("error during db Connection", err));

const authRouter=require('./routes/authRoutes')
const taskRouter=require('./routes/taskRoutes')


app.get('/', (req, res) => {
    res.send("Hi am root!");
})




app.use('/api/auth',authRouter);
app.use('/api/task',taskRouter);

app.listen(port, () => {
    console.log("Server start at 8080 port");
})