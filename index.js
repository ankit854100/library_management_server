import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import bookRouter from './routes/books.js';
import memberRouter from './routes/members.js';

import {memberList, paginatedResult, getAllMembers, addUser, deleteuser} from "./controllers/members.js"

const app = express();

app.use(bodyParser.json({limit:"30mb", extended: true}));
app.use(bodyParser.urlencoded({limit:"30mb", extended: true}));
app.use(cors());

app.get("/member", paginatedResult(memberList), (req, res) => {
    try {
        res.json(res.paginatedResult);
    } catch (error) {
        console.log(error);
    }
});

app.post("/member", addUser);

app.delete("/member/:email", deleteuser);

app.use("/book", bookRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("Server is running at port: ", PORT)
});